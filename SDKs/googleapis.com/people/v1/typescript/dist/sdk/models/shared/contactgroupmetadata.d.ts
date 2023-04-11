import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The metadata about a contact group.
 */
export declare class ContactGroupMetadata extends SpeakeasyBase {
    /**
     * Output only. True if the contact group resource has been deleted. Populated only for [`ListContactGroups`](/people/api/rest/v1/contactgroups/list) requests that include a sync token.
     */
    deleted?: boolean;
    /**
     * Output only. The time the group was last updated.
     */
    updateTime?: string;
}
