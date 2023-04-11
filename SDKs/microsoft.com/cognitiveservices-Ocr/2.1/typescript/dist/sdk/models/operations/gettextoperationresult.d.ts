import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTextOperationResultRequest extends SpeakeasyBase {
    /**
     * Id of the text operation returned in the response of the 'Recognize Text'
     */
    operationId: string;
}
export declare class GetTextOperationResultResponse extends SpeakeasyBase {
    /**
     * Error response.
     */
    computerVisionError?: shared.ComputerVisionError;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Returns the operation status.
     */
    textOperationResult?: shared.TextOperationResult;
}
