import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetGroupsRequest extends SpeakeasyBase {
    /**
     * Can only be used by admins or managers to fetch all entities
     */
    all?: boolean;
    /**
     * Standard users can use this only with their own _userId_
     */
    userId?: number;
}
export declare class GetGroupsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    groups?: shared.Group[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
