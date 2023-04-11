import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1ProcessorType } from "./googleclouddocumentaiv1processortype";
/**
 * Response message for list processor types.
 */
export declare class GoogleCloudDocumentaiV1ListProcessorTypesResponse extends SpeakeasyBase {
    /**
     * Points to the next page, otherwise empty.
     */
    nextPageToken?: string;
    /**
     * The processor types.
     */
    processorTypes?: GoogleCloudDocumentaiV1ProcessorType[];
}
