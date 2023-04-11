import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3DocumentSchema } from "./googleclouddocumentaiv1beta3documentschema";
import { GoogleCloudDocumentaiV1beta3ProcessorVersion } from "./googleclouddocumentaiv1beta3processorversion";
import { GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestInputData } from "./googleclouddocumentaiv1beta3trainprocessorversionrequestinputdata";
/**
 * Request message for the create processor version method.
 */
export declare class GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequest extends SpeakeasyBase {
    /**
     * Optional. The processor version to use as a base for training. This processor version must be a child of `parent`. Format: `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}`.
     */
    baseProcessorVersion?: string;
    /**
     * The schema defines the output of the processed document by a processor.
     */
    documentSchema?: GoogleCloudDocumentaiV1beta3DocumentSchema;
    /**
     * The input data used to train a new `ProcessorVersion`.
     */
    inputData?: GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestInputData;
    /**
     * A processor version is an implementation of a processor. Each processor can have multiple versions, pre-trained by Google internally or up-trained by the customer. At a time, a processor can only have one default version version. So the processor's behavior (when processing documents) is defined by a default version
     */
    processorVersion?: GoogleCloudDocumentaiV1beta3ProcessorVersion;
}
