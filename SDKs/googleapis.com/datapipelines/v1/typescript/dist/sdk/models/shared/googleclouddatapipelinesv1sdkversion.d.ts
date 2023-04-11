import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The support status for this SDK version.
 */
export declare enum GoogleCloudDatapipelinesV1SDKVersionSDKSupportStatusEnum {
    Unknown = "UNKNOWN",
    Supported = "SUPPORTED",
    Stale = "STALE",
    Deprecated = "DEPRECATED",
    Unsupported = "UNSUPPORTED"
}
/**
 * The version of the SDK used to run the job.
 */
export declare class GoogleCloudDatapipelinesV1SDKVersion extends SpeakeasyBase {
    /**
     * The support status for this SDK version.
     */
    sdkSupportStatus?: GoogleCloudDatapipelinesV1SDKVersionSDKSupportStatusEnum;
    /**
     * The version of the SDK used to run the job.
     */
    version?: string;
    /**
     * A readable string describing the version of the SDK.
     */
    versionDisplayName?: string;
}
