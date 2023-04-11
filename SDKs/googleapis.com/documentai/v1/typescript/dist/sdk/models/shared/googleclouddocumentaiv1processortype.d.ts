import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1ProcessorTypeLocationInfo } from "./googleclouddocumentaiv1processortypelocationinfo";
/**
 * Launch stage of the processor type
 */
export declare enum GoogleCloudDocumentaiV1ProcessorTypeLaunchStageEnum {
    LaunchStageUnspecified = "LAUNCH_STAGE_UNSPECIFIED",
    Unimplemented = "UNIMPLEMENTED",
    Prelaunch = "PRELAUNCH",
    EarlyAccess = "EARLY_ACCESS",
    Alpha = "ALPHA",
    Beta = "BETA",
    Ga = "GA",
    Deprecated = "DEPRECATED"
}
/**
 * A processor type is responsible for performing a certain document understanding task on a certain type of document.
 */
export declare class GoogleCloudDocumentaiV1ProcessorType extends SpeakeasyBase {
    /**
     * Whether the processor type allows creation. If true, users can create a processor of this processor type. Otherwise, users need to request access.
     */
    allowCreation?: boolean;
    /**
     * The locations in which this processor is available.
     */
    availableLocations?: GoogleCloudDocumentaiV1ProcessorTypeLocationInfo[];
    /**
     * The processor category, used by UI to group processor types.
     */
    category?: string;
    /**
     * Launch stage of the processor type
     */
    launchStage?: GoogleCloudDocumentaiV1ProcessorTypeLaunchStageEnum;
    /**
     * The resource name of the processor type. Format: `projects/{project}/processorTypes/{processor_type}`
     */
    name?: string;
    /**
     * A set of Cloud Storage URIs of sample documents for this processor.
     */
    sampleDocumentUris?: string[];
    /**
     * The processor type, e.g., `OCR_PROCESSOR`, `INVOICE_PROCESSOR`, etc.
     */
    type?: string;
}
