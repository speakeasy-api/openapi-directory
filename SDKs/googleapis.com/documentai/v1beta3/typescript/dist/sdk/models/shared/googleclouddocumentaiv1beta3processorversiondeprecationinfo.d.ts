import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the upcoming deprecation of this processor version.
 */
export declare class GoogleCloudDocumentaiV1beta3ProcessorVersionDeprecationInfo extends SpeakeasyBase {
    /**
     * The time at which this processor version will be deprecated.
     */
    deprecationTime?: string;
    /**
     * If set, the processor version that will be used as a replacement.
     */
    replacementProcessorVersion?: string;
}
