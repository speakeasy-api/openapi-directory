import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for `TestIamPermissions` method.
 */
export declare class TestIamPermissionsRequest extends SpeakeasyBase {
    /**
     * The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
     */
    permissions?: string[];
}
