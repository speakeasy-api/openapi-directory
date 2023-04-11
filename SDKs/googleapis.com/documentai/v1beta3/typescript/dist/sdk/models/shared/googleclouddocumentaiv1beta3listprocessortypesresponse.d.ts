import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3ProcessorType } from "./googleclouddocumentaiv1beta3processortype";
/**
 * Response message for list processor types.
 */
export declare class GoogleCloudDocumentaiV1beta3ListProcessorTypesResponse extends SpeakeasyBase {
    /**
     * Points to the next page, otherwise empty.
     */
    nextPageToken?: string;
    /**
     * The processor types.
     */
    processorTypes?: GoogleCloudDocumentaiV1beta3ProcessorType[];
}
