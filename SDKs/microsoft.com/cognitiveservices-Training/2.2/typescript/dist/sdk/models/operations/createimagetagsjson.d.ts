import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateImageTagsJsonRequest extends SpeakeasyBase {
    /**
     * Batch of image tags. Limited to 128 tags per batch.
     */
    imageTagCreateBatch: shared.ImageTagCreateBatch;
    trainingKey: string;
    /**
     * The project id.
     */
    projectId: string;
}
export declare class CreateImageTagsJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    imageTagCreateSummary?: shared.ImageTagCreateSummary;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
