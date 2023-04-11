import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchAttractionRequest extends SpeakeasyBase {
    /**
     * Patch to apply
     */
    augmentationData: shared.AugmentationData;
    /**
     * Unique correlation id to be able to trace the request in our system
     */
    tmpsCorrelationId: string;
    /**
     * ID of the attraction the patch will be applied
     */
    id: string;
}
export declare class PatchAttractionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
