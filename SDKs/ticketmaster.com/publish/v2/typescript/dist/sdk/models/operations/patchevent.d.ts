import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchEventRequest extends SpeakeasyBase {
    /**
     * Patch to apply
     */
    augmentationData: shared.AugmentationData;
    /**
     * Unique correlation id to be able to trace the request in our system
     */
    tmpsCorrelationId: string;
    /**
     * ID of the event the patch will be applied
     */
    id: string;
}
export declare class PatchEventResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
