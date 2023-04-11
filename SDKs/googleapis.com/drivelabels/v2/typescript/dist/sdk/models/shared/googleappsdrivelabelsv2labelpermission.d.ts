import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The role the principal should have.
 */
export declare enum GoogleAppsDriveLabelsV2LabelPermissionRoleEnum {
    LabelRoleUnspecified = "LABEL_ROLE_UNSPECIFIED",
    Reader = "READER",
    Applier = "APPLIER",
    Organizer = "ORGANIZER",
    Editor = "EDITOR"
}
/**
 * The permission that applies to a principal (user, group, audience) on a label.
 */
export declare class GoogleAppsDriveLabelsV2LabelPermission extends SpeakeasyBase {
    /**
     * Audience to grant a role to. The magic value of `audiences/default` may be used to apply the role to the default audience in the context of the organization that owns the Label.
     */
    audience?: string;
    /**
     * Specifies the email address for a user or group pricinpal. Not populated for audience principals. User and Group permissions may only be inserted using email address. On update requests, if email address is specified, no principal should be specified.
     */
    email?: string;
    /**
     * Group resource name.
     */
    group?: string;
    /**
     * Resource name of this permission.
     */
    name?: string;
    /**
     * Person resource name.
     */
    person?: string;
    /**
     * The role the principal should have.
     */
    role?: GoogleAppsDriveLabelsV2LabelPermissionRoleEnum;
}
