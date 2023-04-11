import { SpeakeasyBase } from "../../../internal/utils";
import { ContactGroupInput } from "./contactgroup";
/**
 * A request to update an existing user contact group. All updated fields will be replaced.
 */
export declare class UpdateContactGroupRequestInput extends SpeakeasyBase {
    /**
     * A contact group.
     */
    contactGroup?: ContactGroupInput;
    /**
     * Optional. A field mask to restrict which fields on the group are returned. Defaults to `metadata`, `groupType`, and `name` if not set or set to empty. Valid fields are: * clientData * groupType * memberCount * metadata * name
     */
    readGroupFields?: string;
    /**
     * Optional. A field mask to restrict which fields on the group are updated. Multiple fields can be specified by separating them with commas. Defaults to `name` if not set or set to empty. Updated fields are replaced. Valid values are: * clientData * name
     */
    updateGroupFields?: string;
}
