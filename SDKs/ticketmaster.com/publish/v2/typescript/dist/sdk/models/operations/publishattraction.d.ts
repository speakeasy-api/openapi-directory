import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PublishAttractionRequest extends SpeakeasyBase {
    /**
     * Attraction
     */
    attraction: shared.Attraction;
    /**
     * Unique correlation id to be able to trace the request in our system
     */
    tmpsCorrelationId: string;
}
export declare class PublishAttractionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
