import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1Contacts } from "./googleclouddatacatalogv1contacts";
import { GoogleCloudDatacatalogV1EntryOverview } from "./googleclouddatacatalogv1entryoverview";
/**
 * Business Context of the entry.
 */
export declare class GoogleCloudDatacatalogV1BusinessContext extends SpeakeasyBase {
    /**
     * Contact people for the entry.
     */
    contacts?: GoogleCloudDatacatalogV1Contacts;
    /**
     * Entry overview fields for rich text descriptions of entries.
     */
    entryOverview?: GoogleCloudDatacatalogV1EntryOverview;
}
