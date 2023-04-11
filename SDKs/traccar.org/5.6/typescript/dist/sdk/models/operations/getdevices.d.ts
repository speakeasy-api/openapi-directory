import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDevicesRequest extends SpeakeasyBase {
    /**
     * Can only be used by admins or managers to fetch all entities
     */
    all?: boolean;
    /**
     * To fetch one or more devices. Multiple params can be passed like `id=31&id=42`
     */
    id?: number;
    /**
     * To fetch one or more devices. Multiple params can be passed like `uniqueId=333331&uniqieId=44442`
     */
    uniqueId?: string;
    /**
     * Standard users can use this only with their own _userId_
     */
    userId?: number;
}
export declare class GetDevicesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    devices?: shared.Device[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
