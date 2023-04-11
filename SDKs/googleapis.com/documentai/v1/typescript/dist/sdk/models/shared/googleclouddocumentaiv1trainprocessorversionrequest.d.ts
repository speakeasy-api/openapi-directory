import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1DocumentSchema } from "./googleclouddocumentaiv1documentschema";
import { GoogleCloudDocumentaiV1ProcessorVersion } from "./googleclouddocumentaiv1processorversion";
import { GoogleCloudDocumentaiV1TrainProcessorVersionRequestInputData } from "./googleclouddocumentaiv1trainprocessorversionrequestinputdata";
/**
 * Request message for the create processor version method.
 */
export declare class GoogleCloudDocumentaiV1TrainProcessorVersionRequest extends SpeakeasyBase {
    /**
     * Optional. The processor version to use as a base for training. This processor version must be a child of `parent`. Format: `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}`.
     */
    baseProcessorVersion?: string;
    /**
     * The schema defines the output of the processed document by a processor.
     */
    documentSchema?: GoogleCloudDocumentaiV1DocumentSchema;
    /**
     * The input data used to train a new `ProcessorVersion`.
     */
    inputData?: GoogleCloudDocumentaiV1TrainProcessorVersionRequestInputData;
    /**
     * A processor version is an implementation of a processor. Each processor can have multiple versions, pre-trained by Google internally or up-trained by the customer. At a time, a processor can only have one default version version. So the processor's behavior (when processing documents) is defined by a default version
     */
    processorVersion?: GoogleCloudDocumentaiV1ProcessorVersion;
}
