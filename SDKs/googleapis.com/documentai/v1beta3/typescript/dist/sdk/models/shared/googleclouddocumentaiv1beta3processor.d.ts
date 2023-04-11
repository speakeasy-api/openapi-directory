import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. The state of the processor.
 */
export declare enum GoogleCloudDocumentaiV1beta3ProcessorStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    Enabling = "ENABLING",
    Disabling = "DISABLING",
    Creating = "CREATING",
    Failed = "FAILED",
    Deleting = "DELETING"
}
/**
 * The first-class citizen for Document AI. Each processor defines how to extract structural information from a document.
 */
export declare class GoogleCloudDocumentaiV1beta3Processor extends SpeakeasyBase {
    /**
     * The time the processor was created.
     */
    createTime?: string;
    /**
     * The default processor version.
     */
    defaultProcessorVersion?: string;
    /**
     * The display name of the processor.
     */
    displayName?: string;
    /**
     * The KMS key used for encryption/decryption in CMEK scenarios. See https://cloud.google.com/security-key-management.
     */
    kmsKeyName?: string;
    /**
     * Output only. Immutable. The resource name of the processor. Format: `projects/{project}/locations/{location}/processors/{processor}`
     */
    name?: string;
    /**
     * Output only. Immutable. The http endpoint that can be called to invoke processing.
     */
    processEndpoint?: string;
    /**
     * Output only. The state of the processor.
     */
    state?: GoogleCloudDocumentaiV1beta3ProcessorStateEnum;
    /**
     * The processor type, e.g., `OCR_PROCESSOR`, `INVOICE_PROCESSOR`, etc. To get a list of processors types, see FetchProcessorTypes.
     */
    type?: string;
}
/**
 * The first-class citizen for Document AI. Each processor defines how to extract structural information from a document.
 */
export declare class GoogleCloudDocumentaiV1beta3ProcessorInput extends SpeakeasyBase {
    /**
     * The time the processor was created.
     */
    createTime?: string;
    /**
     * The default processor version.
     */
    defaultProcessorVersion?: string;
    /**
     * The display name of the processor.
     */
    displayName?: string;
    /**
     * The KMS key used for encryption/decryption in CMEK scenarios. See https://cloud.google.com/security-key-management.
     */
    kmsKeyName?: string;
    /**
     * The processor type, e.g., `OCR_PROCESSOR`, `INVOICE_PROCESSOR`, etc. To get a list of processors types, see FetchProcessorTypes.
     */
    type?: string;
}
