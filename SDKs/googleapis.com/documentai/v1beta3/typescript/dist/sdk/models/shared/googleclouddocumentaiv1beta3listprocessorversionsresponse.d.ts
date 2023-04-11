import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3ProcessorVersion } from "./googleclouddocumentaiv1beta3processorversion";
/**
 * Response message for list processors.
 */
export declare class GoogleCloudDocumentaiV1beta3ListProcessorVersionsResponse extends SpeakeasyBase {
    /**
     * Points to the next processor, otherwise empty.
     */
    nextPageToken?: string;
    /**
     * The list of processors.
     */
    processorVersions?: GoogleCloudDocumentaiV1beta3ProcessorVersion[];
}
