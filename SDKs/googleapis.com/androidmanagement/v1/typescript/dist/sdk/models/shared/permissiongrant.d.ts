import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The policy for granting the permission.
 */
export declare enum PermissionGrantPolicyEnum {
    PermissionPolicyUnspecified = "PERMISSION_POLICY_UNSPECIFIED",
    Prompt = "PROMPT",
    Grant = "GRANT",
    Deny = "DENY"
}
/**
 * Configuration for an Android permission and its grant state.
 */
export declare class PermissionGrant extends SpeakeasyBase {
    /**
     * The Android permission or group, e.g. android.permission.READ_CALENDAR or android.permission_group.CALENDAR.
     */
    permission?: string;
    /**
     * The policy for granting the permission.
     */
    policy?: PermissionGrantPolicyEnum;
}
