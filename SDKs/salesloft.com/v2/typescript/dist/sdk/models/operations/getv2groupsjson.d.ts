import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetV2GroupsJsonRequest extends SpeakeasyBase {
    /**
     * IDs of groups to fetch.
     */
    ids?: number[];
    /**
     * Key to sort on, must be one of: created_at, updated_at. Defaults to updated_at
     */
    sortBy?: string;
    /**
     * Direction to sort in, must be one of: ASC, DESC. Defaults to DESC
     */
    sortDirection?: string;
}
export declare class GetV2GroupsJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
