import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1ProcessorType } from "./googleclouddocumentaiv1processortype";
/**
 * Response message for fetch processor types.
 */
export declare class GoogleCloudDocumentaiV1FetchProcessorTypesResponse extends SpeakeasyBase {
    /**
     * The list of processor types.
     */
    processorTypes?: GoogleCloudDocumentaiV1ProcessorType[];
}
