import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersIdSavedSearchesRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the user.
     */
    id: number;
}
export declare class GetUsersIdSavedSearchesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not Allowed
     */
    error?: shared.ErrorT;
    /**
     * Success
     */
    savedSearches?: shared.SavedSearch[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
