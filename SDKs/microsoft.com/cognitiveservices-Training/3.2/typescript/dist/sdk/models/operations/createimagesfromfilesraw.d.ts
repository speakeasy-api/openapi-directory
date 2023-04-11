import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateImagesFromFilesRawRequest extends SpeakeasyBase {
    /**
     * The batch of image files to add. Limited to 64 images and 20 tags per batch.
     */
    requestBody: Uint8Array;
    /**
     * The project id.
     */
    projectId: string;
}
export declare class CreateImagesFromFilesRawResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Error response
     */
    customVisionError?: shared.CustomVisionError;
    /**
     * OK
     */
    imageCreateSummary?: shared.ImageCreateSummary;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
