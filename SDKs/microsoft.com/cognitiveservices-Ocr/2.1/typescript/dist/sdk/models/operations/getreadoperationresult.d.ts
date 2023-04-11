import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetReadOperationResultRequest extends SpeakeasyBase {
    /**
     * Id of read operation returned in the response of the 'Batch Read File' interface.
     */
    operationId: string;
}
export declare class GetReadOperationResultResponse extends SpeakeasyBase {
    /**
     * Error response.
     */
    computerVisionError?: shared.ComputerVisionError;
    contentType: string;
    /**
     * Returns the read operation status.
     */
    readOperationResult?: shared.ReadOperationResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
