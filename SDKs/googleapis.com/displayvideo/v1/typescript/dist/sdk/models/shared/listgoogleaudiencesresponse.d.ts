import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAudience } from "./googleaudience";
/**
 * Successful response
 */
export declare class ListGoogleAudiencesResponse extends SpeakeasyBase {
    /**
     * The list of Google audiences. This list will be absent if empty.
     */
    googleAudiences?: GoogleAudience[];
    /**
     * A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListGoogleAudiences` method to retrieve the next page of results.
     */
    nextPageToken?: string;
}
