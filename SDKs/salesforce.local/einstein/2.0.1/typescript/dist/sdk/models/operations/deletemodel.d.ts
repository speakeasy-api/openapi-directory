import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteModelSecurity extends SpeakeasyBase {
    bearerToken: string;
}
export declare class DeleteModelRequest extends SpeakeasyBase {
    /**
     * Model Id
     */
    modelId: string;
}
export declare class DeleteModelResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Deletion submitted
     */
    deletionResponse?: shared.DeletionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
