import { SpeakeasyBase } from "../../../internal/utils";
import { CombinedAudience } from "./combinedaudience";
/**
 * Successful response
 */
export declare class ListCombinedAudiencesResponse extends SpeakeasyBase {
    /**
     * The list of combined audiences. This list will be absent if empty.
     */
    combinedAudiences?: CombinedAudience[];
    /**
     * A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListCombinedAudiences` method to retrieve the next page of results.
     */
    nextPageToken?: string;
}
