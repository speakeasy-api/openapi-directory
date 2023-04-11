import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. The SDK Language.
 */
export declare enum SDKInfoLanguageEnum {
    Unknown = "UNKNOWN",
    Java = "JAVA",
    Python = "PYTHON",
    Go = "GO"
}
/**
 * SDK Information.
 */
export declare class SDKInfo extends SpeakeasyBase {
    /**
     * Required. The SDK Language.
     */
    language?: SDKInfoLanguageEnum;
    /**
     * Optional. The SDK version.
     */
    version?: string;
}
