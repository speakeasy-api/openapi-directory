import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message for `TestIamPermissions` method.
 */
export declare class TestIamPermissionsResponse extends SpeakeasyBase {
    /**
     * A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
     */
    permissions?: string[];
}
