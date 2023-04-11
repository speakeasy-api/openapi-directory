import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateImagesFromPredictionsFormRequest extends SpeakeasyBase {
    /**
     * Image and tag ids. Limited to 64 images and 20 tags per batch.
     */
    imageIdCreateBatch: shared.ImageIdCreateBatch;
    trainingKey: string;
    /**
     * The project id.
     */
    projectId: string;
}
export declare class CreateImagesFromPredictionsFormResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    imageCreateSummary?: shared.ImageCreateSummary;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
