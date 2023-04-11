import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UseAsDraftRequest extends SpeakeasyBase {
    useAsDraftPayload?: shared.UseAsDraftPayload;
    /**
     * Document ID
     */
    documentId: number;
}
export declare class UseAsDraftResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Operation status
     */
    operationStatus?: shared.OperationStatus;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
