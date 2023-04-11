import { SpeakeasyBase } from "../../../internal/utils";
import { FirstAndThirdPartyAudience } from "./firstandthirdpartyaudience";
/**
 * Successful response
 */
export declare class ListFirstAndThirdPartyAudiencesResponse extends SpeakeasyBase {
    /**
     * The list of first and third party audiences. Audience size properties will not be included. This list will be absent if empty.
     */
    firstAndThirdPartyAudiences?: FirstAndThirdPartyAudience[];
    /**
     * A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListFirstAndThirdPartyAudiences` method to retrieve the next page of results.
     */
    nextPageToken?: string;
}
