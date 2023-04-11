import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1Processor } from "./googleclouddocumentaiv1processor";
/**
 * Response message for list processors.
 */
export declare class GoogleCloudDocumentaiV1ListProcessorsResponse extends SpeakeasyBase {
    /**
     * Points to the next processor, otherwise empty.
     */
    nextPageToken?: string;
    /**
     * The list of processors.
     */
    processors?: GoogleCloudDocumentaiV1Processor[];
}
