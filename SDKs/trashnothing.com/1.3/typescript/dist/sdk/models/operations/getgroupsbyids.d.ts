import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetGroupsByIdsSecurity extends SpeakeasyBase {
    apiKey?: string;
    oauth2Code?: string;
    oauth2Implicit?: string;
}
export declare class GetGroupsByIdsRequest extends SpeakeasyBase {
    /**
     * The IDs of the groups to retrieve.  If more than 20 group IDs are passed, only the first 20 groups will be returned.
     */
    groupIds: string;
}
export declare class GetGroupsByIdsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The groups.
     */
    groups?: shared.Group[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
