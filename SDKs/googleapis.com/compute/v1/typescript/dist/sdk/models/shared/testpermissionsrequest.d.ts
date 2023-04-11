import { SpeakeasyBase } from "../../../internal/utils";
export declare class TestPermissionsRequest extends SpeakeasyBase {
    /**
     * The set of permissions to check for the 'resource'. Permissions with wildcards (such as '*' or 'storage.*') are not allowed.
     */
    permissions?: string[];
}
