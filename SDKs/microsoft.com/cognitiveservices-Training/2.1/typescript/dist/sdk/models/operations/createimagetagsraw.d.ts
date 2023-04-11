import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateImageTagsRawRequest extends SpeakeasyBase {
    /**
     * Batch of image tags. Limited to 128 tags per batch
     */
    requestBody: Uint8Array;
    trainingKey: string;
    /**
     * The project id
     */
    projectId: string;
}
export declare class CreateImageTagsRawResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    imageTagCreateSummary?: shared.ImageTagCreateSummary;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
