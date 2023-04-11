import { SpeakeasyBase } from "../../../internal/utils";
import { ContactGroupInput } from "./contactgroup";
/**
 * A request to create a new contact group.
 */
export declare class CreateContactGroupRequestInput extends SpeakeasyBase {
    /**
     * A contact group.
     */
    contactGroup?: ContactGroupInput;
    /**
     * Optional. A field mask to restrict which fields on the group are returned. Defaults to `metadata`, `groupType`, and `name` if not set or set to empty. Valid fields are: * clientData * groupType * metadata * name
     */
    readGroupFields?: string;
}
