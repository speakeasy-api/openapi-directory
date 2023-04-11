import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateImagesFromPredictionsRawRequest extends SpeakeasyBase {
    /**
     * Image and tag ids. Limited to 64 images and 20 tags per batch.
     */
    requestBody: Uint8Array;
    trainingKey: string;
    /**
     * The project id.
     */
    projectId: string;
}
export declare class CreateImagesFromPredictionsRawResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    imageCreateSummary?: shared.ImageCreateSummary;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
