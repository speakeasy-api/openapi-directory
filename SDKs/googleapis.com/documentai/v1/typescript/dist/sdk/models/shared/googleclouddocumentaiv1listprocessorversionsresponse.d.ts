import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1ProcessorVersion } from "./googleclouddocumentaiv1processorversion";
/**
 * Response message for list processors.
 */
export declare class GoogleCloudDocumentaiV1ListProcessorVersionsResponse extends SpeakeasyBase {
    /**
     * Points to the next processor, otherwise empty.
     */
    nextPageToken?: string;
    /**
     * The list of processors.
     */
    processorVersions?: GoogleCloudDocumentaiV1ProcessorVersion[];
}
