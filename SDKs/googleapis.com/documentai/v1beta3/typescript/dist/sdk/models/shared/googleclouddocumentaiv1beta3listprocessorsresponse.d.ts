import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3Processor } from "./googleclouddocumentaiv1beta3processor";
/**
 * Response message for list processors.
 */
export declare class GoogleCloudDocumentaiV1beta3ListProcessorsResponse extends SpeakeasyBase {
    /**
     * Points to the next processor, otherwise empty.
     */
    nextPageToken?: string;
    /**
     * The list of processors.
     */
    processors?: GoogleCloudDocumentaiV1beta3Processor[];
}
