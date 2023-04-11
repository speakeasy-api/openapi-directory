import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPositionsRequest extends SpeakeasyBase {
    /**
     * _deviceId_ is optional, but requires the _from_ and _to_ parameters when used
     */
    deviceId?: number;
    /**
     * in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
     */
    from?: Date;
    /**
     * To fetch one or more positions. Multiple params can be passed like `id=31&id=42`
     */
    id?: number;
    /**
     * in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
     */
    to?: Date;
}
export declare class GetPositionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    positions?: shared.Position[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
