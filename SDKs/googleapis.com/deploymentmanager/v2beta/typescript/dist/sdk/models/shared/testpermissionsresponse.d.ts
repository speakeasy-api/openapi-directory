import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful response
 */
export declare class TestPermissionsResponse extends SpeakeasyBase {
    /**
     * A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
     */
    permissions?: string[];
}
