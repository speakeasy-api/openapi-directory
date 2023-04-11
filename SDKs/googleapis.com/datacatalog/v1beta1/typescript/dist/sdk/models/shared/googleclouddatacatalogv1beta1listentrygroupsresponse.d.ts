import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1EntryGroup } from "./googleclouddatacatalogv1beta1entrygroup";
/**
 * Response message for ListEntryGroups.
 */
export declare class GoogleCloudDatacatalogV1beta1ListEntryGroupsResponse extends SpeakeasyBase {
    /**
     * EntryGroup details.
     */
    entryGroups?: GoogleCloudDatacatalogV1beta1EntryGroup[];
    /**
     * Token to retrieve the next page of results. It is set to empty if no items remain in results.
     */
    nextPageToken?: string;
}
