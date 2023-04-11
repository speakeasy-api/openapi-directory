import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1Contacts } from "./googleclouddatacatalogv1contacts";
/**
 * Request message for ModifyEntryContacts.
 */
export declare class GoogleCloudDatacatalogV1ModifyEntryContactsRequest extends SpeakeasyBase {
    /**
     * Contact people for the entry.
     */
    contacts?: GoogleCloudDatacatalogV1Contacts;
}
