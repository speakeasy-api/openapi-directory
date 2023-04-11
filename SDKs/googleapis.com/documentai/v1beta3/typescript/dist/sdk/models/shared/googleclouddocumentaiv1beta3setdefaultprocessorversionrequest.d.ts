import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for the set default processor version method.
 */
export declare class GoogleCloudDocumentaiV1beta3SetDefaultProcessorVersionRequest extends SpeakeasyBase {
    /**
     * Required. The resource name of child ProcessorVersion to use as default. Format: `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{version}`
     */
    defaultProcessorVersion?: string;
}
