import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteModel1Security extends SpeakeasyBase {
    bearerToken: string;
}
export declare class DeleteModel1Request extends SpeakeasyBase {
    modelId: string;
}
export declare class DeleteModel1Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Deletion submitted
     */
    deletionResponse?: shared.DeletionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
