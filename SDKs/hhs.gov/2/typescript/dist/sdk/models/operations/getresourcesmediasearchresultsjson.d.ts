import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetResourcesMediaSearchResultsJsonRequest extends SpeakeasyBase {
    /**
     * The maximum number of records to return
     */
    max?: number;
    /**
     * The offset of the records set to return for pagination.
     */
    offset?: number;
    /**
     * The search query supplied by the user
     */
    q: string;
}
export declare class GetResourcesMediaSearchResultsJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Returns the list of MediaItems matching the search query 'q'.<p>Please enter keyword or URL in search query 'q'.
     */
    mediaItemWrappeds?: shared.MediaItemWrapped[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
