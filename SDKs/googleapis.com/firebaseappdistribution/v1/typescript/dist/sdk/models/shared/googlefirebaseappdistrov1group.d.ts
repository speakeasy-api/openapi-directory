import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A group which can contain testers. A group can be invited to test apps in a Firebase project.
 */
export declare class GoogleFirebaseAppdistroV1Group extends SpeakeasyBase {
    /**
     * Required. The display name of the group.
     */
    displayName?: string;
    /**
     * Output only. The number of invite links for this group.
     */
    inviteLinkCount?: number;
    /**
     * The name of the group resource. Format: `projects/{project_number}/groups/{group_alias}`
     */
    name?: string;
    /**
     * Output only. The number of releases this group is permitted to access.
     */
    releaseCount?: number;
    /**
     * Output only. The number of testers who are members of this group.
     */
    testerCount?: number;
}
/**
 * A group which can contain testers. A group can be invited to test apps in a Firebase project.
 */
export declare class GoogleFirebaseAppdistroV1GroupInput extends SpeakeasyBase {
    /**
     * Required. The display name of the group.
     */
    displayName?: string;
    /**
     * The name of the group resource. Format: `projects/{project_number}/groups/{group_alias}`
     */
    name?: string;
}
