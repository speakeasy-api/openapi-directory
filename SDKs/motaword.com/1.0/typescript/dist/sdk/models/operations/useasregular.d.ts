import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UseAsRegularRequest extends SpeakeasyBase {
    useAsRegularPayload?: shared.UseAsRegularPayload;
    /**
     * Document ID
     */
    documentId: number;
}
export declare class UseAsRegularResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Operation status
     */
    operationStatus?: shared.OperationStatus;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
