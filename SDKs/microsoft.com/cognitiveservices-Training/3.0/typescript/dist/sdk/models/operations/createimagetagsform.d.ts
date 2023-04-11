import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateImageTagsFormRequest extends SpeakeasyBase {
    /**
     * Batch of image tags. Limited to 128 tags per batch.
     */
    imageTagCreateBatch: shared.ImageTagCreateBatch;
    /**
     * API key.
     */
    trainingKey: string;
    /**
     * The project id.
     */
    projectId: string;
}
export declare class CreateImageTagsFormResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Error response
     */
    customVisionError?: shared.CustomVisionError;
    /**
     * OK
     */
    imageTagCreateSummary?: shared.ImageTagCreateSummary;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
