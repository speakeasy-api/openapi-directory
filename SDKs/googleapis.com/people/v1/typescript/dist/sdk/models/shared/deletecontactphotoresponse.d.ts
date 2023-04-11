import { SpeakeasyBase } from "../../../internal/utils";
import { Person } from "./person";
/**
 * The response for deleting a contact's photo.
 */
export declare class DeleteContactPhotoResponse extends SpeakeasyBase {
    /**
     * Information about a person merged from various data sources such as the authenticated user's contacts and profile data. Most fields can have multiple items. The items in a field have no guaranteed order, but each non-empty field is guaranteed to have exactly one field with `metadata.primary` set to true.
     */
    person?: Person;
}
