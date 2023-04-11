import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CancelProjectRequest extends SpeakeasyBase {
    cancelProjectRequest?: shared.CancelProjectRequest;
    /**
     * Project ID
     */
    id: number;
}
export declare class CancelProjectResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ProjectNotFound
     */
    error?: shared.ErrorT;
    /**
     * Project canceled successfully
     */
    operationStatus?: shared.OperationStatus;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
