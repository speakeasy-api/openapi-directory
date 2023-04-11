import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostMatrixResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unexpected Error
     */
    ghError?: shared.GHError;
    headers?: Record<string, string[]>;
    /**
     * Matrix API response
     */
    matrixResponse?: shared.MatrixResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
