import { SpeakeasyBase } from "../../../internal/utils";
import { ContactGroupMetadata } from "./contactgroupmetadata";
import { GroupClientData } from "./groupclientdata";
/**
 * A contact group.
 */
export declare class ContactGroupInput extends SpeakeasyBase {
    /**
     * The group's client data.
     */
    clientData?: GroupClientData[];
    /**
     * The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the resource. Used for web cache validation.
     */
    etag?: string;
    /**
     * The contact group name set by the group owner or a system provided name for system groups. For [`contactGroups.create`](/people/api/rest/v1/contactGroups/create) or [`contactGroups.update`](/people/api/rest/v1/contactGroups/update) the name must be unique to the users contact groups. Attempting to create a group with a duplicate name will return a HTTP 409 error.
     */
    name?: string;
    /**
     * The resource name for the contact group, assigned by the server. An ASCII string, in the form of `contactGroups/{contact_group_id}`.
     */
    resourceName?: string;
}
/**
 * Output only. The contact group type.
 */
export declare enum ContactGroupGroupTypeEnum {
    GroupTypeUnspecified = "GROUP_TYPE_UNSPECIFIED",
    UserContactGroup = "USER_CONTACT_GROUP",
    SystemContactGroup = "SYSTEM_CONTACT_GROUP"
}
/**
 * A contact group.
 */
export declare class ContactGroup extends SpeakeasyBase {
    /**
     * The group's client data.
     */
    clientData?: GroupClientData[];
    /**
     * The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the resource. Used for web cache validation.
     */
    etag?: string;
    /**
     * Output only. The name translated and formatted in the viewer's account locale or the `Accept-Language` HTTP header locale for system groups names. Group names set by the owner are the same as name.
     */
    formattedName?: string;
    /**
     * Output only. The contact group type.
     */
    groupType?: ContactGroupGroupTypeEnum;
    /**
     * Output only. The total number of contacts in the group irrespective of max members in specified in the request.
     */
    memberCount?: number;
    /**
     * Output only. The list of contact person resource names that are members of the contact group. The field is only populated for GET requests and will only return as many members as `maxMembers` in the get request.
     */
    memberResourceNames?: string[];
    /**
     * The metadata about a contact group.
     */
    metadata?: ContactGroupMetadata;
    /**
     * The contact group name set by the group owner or a system provided name for system groups. For [`contactGroups.create`](/people/api/rest/v1/contactGroups/create) or [`contactGroups.update`](/people/api/rest/v1/contactGroups/update) the name must be unique to the users contact groups. Attempting to create a group with a duplicate name will return a HTTP 409 error.
     */
    name?: string;
    /**
     * The resource name for the contact group, assigned by the server. An ASCII string, in the form of `contactGroups/{contact_group_id}`.
     */
    resourceName?: string;
}
