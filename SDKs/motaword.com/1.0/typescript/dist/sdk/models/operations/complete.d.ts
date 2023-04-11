import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CompleteRequest extends SpeakeasyBase {
    /**
     * Continuous project ID
     */
    id: number;
}
export declare class CompleteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Operation status
     */
    operationStatus?: shared.OperationStatus;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
