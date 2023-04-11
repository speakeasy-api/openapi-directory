import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMatrixSolutionRequest extends SpeakeasyBase {
    /**
     * Request solution with jobId
     */
    jobId: string;
}
export declare class GetMatrixSolutionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unexpected Error
     */
    ghError?: shared.GHError;
    headers?: Record<string, string[]>;
    /**
     * A response containing the matrix
     */
    matrixResponse?: shared.MatrixResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
