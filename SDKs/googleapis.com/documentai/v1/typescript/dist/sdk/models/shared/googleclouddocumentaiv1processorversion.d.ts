import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1DocumentSchema } from "./googleclouddocumentaiv1documentschema";
import { GoogleCloudDocumentaiV1EvaluationReference } from "./googleclouddocumentaiv1evaluationreference";
import { GoogleCloudDocumentaiV1ProcessorVersionDeprecationInfo } from "./googleclouddocumentaiv1processorversiondeprecationinfo";
/**
 * The state of the processor version.
 */
export declare enum GoogleCloudDocumentaiV1ProcessorVersionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Deployed = "DEPLOYED",
    Deploying = "DEPLOYING",
    Undeployed = "UNDEPLOYED",
    Undeploying = "UNDEPLOYING",
    Creating = "CREATING",
    Deleting = "DELETING",
    Failed = "FAILED",
    Importing = "IMPORTING"
}
/**
 * A processor version is an implementation of a processor. Each processor can have multiple versions, pre-trained by Google internally or up-trained by the customer. At a time, a processor can only have one default version version. So the processor's behavior (when processing documents) is defined by a default version
 */
export declare class GoogleCloudDocumentaiV1ProcessorVersion extends SpeakeasyBase {
    /**
     * The time the processor version was created.
     */
    createTime?: string;
    /**
     * Information about the upcoming deprecation of this processor version.
     */
    deprecationInfo?: GoogleCloudDocumentaiV1ProcessorVersionDeprecationInfo;
    /**
     * The display name of the processor version.
     */
    displayName?: string;
    /**
     * The schema defines the output of the processed document by a processor.
     */
    documentSchema?: GoogleCloudDocumentaiV1DocumentSchema;
    /**
     * Denotes that this ProcessorVersion is managed by google.
     */
    googleManaged?: boolean;
    /**
     * The KMS key name used for encryption.
     */
    kmsKeyName?: string;
    /**
     * The KMS key version with which data is encrypted.
     */
    kmsKeyVersionName?: string;
    /**
     * Gives a short summary of an evaluation, and links to the evaluation itself.
     */
    latestEvaluation?: GoogleCloudDocumentaiV1EvaluationReference;
    /**
     * The resource name of the processor version. Format: `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processor_version}`
     */
    name?: string;
    /**
     * The state of the processor version.
     */
    state?: GoogleCloudDocumentaiV1ProcessorVersionStateEnum;
}
