import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTagsRequest extends SpeakeasyBase {
    /**
     * API key.
     */
    trainingKey: string;
    /**
     * The iteration id. Defaults to workspace.
     */
    iterationId?: string;
    /**
     * The project id.
     */
    projectId: string;
}
export declare class GetTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Error response
     */
    customVisionError?: shared.CustomVisionError;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tags?: shared.Tag[];
}
