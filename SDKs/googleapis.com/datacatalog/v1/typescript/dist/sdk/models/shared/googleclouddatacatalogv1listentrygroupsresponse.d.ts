import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1EntryGroup } from "./googleclouddatacatalogv1entrygroup";
/**
 * Response message for ListEntryGroups.
 */
export declare class GoogleCloudDatacatalogV1ListEntryGroupsResponse extends SpeakeasyBase {
    /**
     * Entry group details.
     */
    entryGroups?: GoogleCloudDatacatalogV1EntryGroup[];
    /**
     * Pagination token to specify in the next call to retrieve the next page of results. Empty if there are no more items.
     */
    nextPageToken?: string;
}
