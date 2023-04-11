import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateImagesFromFilesJsonRequest extends SpeakeasyBase {
    /**
     * The batch of image files to add. Limited to 64 images and 20 tags per batch
     */
    imageFileCreateBatch: shared.ImageFileCreateBatch;
    trainingKey: string;
    /**
     * The project id
     */
    projectId: string;
}
export declare class CreateImagesFromFilesJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    imageCreateSummary?: shared.ImageCreateSummary;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
