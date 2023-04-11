import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A permission used by this APK.
 */
export declare class UsesPermission extends SpeakeasyBase {
    /**
     * Optionally, the maximum SDK version for which the permission is required.
     */
    maxSDKVersion?: number;
    /**
     * The name of the permission requested.
     */
    name?: string;
}
