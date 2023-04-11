import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CodeScanningGetAlertRequest extends SpeakeasyBase {
    /**
     * The number that identifies an alert. You can find this at the end of the URL for a code scanning alert within GitHub, and in the `number` field in the response from the `GET /repos/{owner}/{repo}/code-scanning/alerts` operation.
     */
    alertNumber: number;
    owner: string;
    repo: string;
}
/**
 * Service unavailable
 */
export declare class CodeScanningGetAlert503ApplicationJSON extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    message?: string;
}
export declare class CodeScanningGetAlertResponse extends SpeakeasyBase {
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
    codeScanningAlert?: shared.CodeScanningAlert;
    /**
     * Service unavailable
     */
    codeScanningGetAlert503ApplicationJSONObject?: CodeScanningGetAlert503ApplicationJSON;
}
