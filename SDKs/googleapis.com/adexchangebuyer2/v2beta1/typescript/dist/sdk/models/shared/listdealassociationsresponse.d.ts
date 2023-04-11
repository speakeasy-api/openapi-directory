import { SpeakeasyBase } from "../../../internal/utils";
import { CreativeDealAssociation } from "./creativedealassociation";
/**
 * A response for listing creative and deal associations
 */
export declare class ListDealAssociationsResponse extends SpeakeasyBase {
    /**
     * The list of associations.
     */
    associations?: CreativeDealAssociation[];
    /**
     * A token to retrieve the next page of results. Pass this value in the ListDealAssociationsRequest.page_token field in the subsequent call to 'ListDealAssociation' method to retrieve the next page of results.
     */
    nextPageToken?: string;
}
