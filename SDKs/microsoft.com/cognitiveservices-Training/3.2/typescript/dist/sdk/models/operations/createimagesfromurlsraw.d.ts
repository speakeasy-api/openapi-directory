import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateImagesFromUrlsRawRequest extends SpeakeasyBase {
    /**
     * Image urls and tag ids. Limited to 64 images and 20 tags per batch.
     */
    requestBody: Uint8Array;
    /**
     * The project id.
     */
    projectId: string;
}
export declare class CreateImagesFromUrlsRawResponse extends SpeakeasyBase {
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
