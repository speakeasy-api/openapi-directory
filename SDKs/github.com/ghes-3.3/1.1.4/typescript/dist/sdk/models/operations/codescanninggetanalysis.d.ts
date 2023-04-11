import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CodeScanningGetAnalysisRequest extends SpeakeasyBase {
    /**
     * The ID of the analysis, as returned from the `GET /repos/{owner}/{repo}/code-scanning/analyses` operation.
     */
    analysisId: number;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
/**
 * Service unavailable
 */
export declare class CodeScanningGetAnalysis503ApplicationJSON extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    message?: string;
}
export declare class CodeScanningGetAnalysisResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response if GitHub Advanced Security is not enabled for this repository
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    codeScanningAnalysis?: shared.CodeScanningAnalysis;
    /**
     * Response
     */
    codeScanningGetAnalysis200ApplicationJsonPlusSarifObject?: Record<string, any>;
    /**
     * Service unavailable
     */
    codeScanningGetAnalysis503ApplicationJSONObject?: CodeScanningGetAnalysis503ApplicationJSON;
}
