import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CodeScanningUpdateAlertRequestBody extends SpeakeasyBase {
    /**
     * **Required when the state is dismissed.** The reason for dismissing or closing the alert.
     */
    dismissedReason?: shared.CodeScanningAlertDismissedReasonEnum;
    /**
     * Sets the state of the code scanning alert. You must provide `dismissed_reason` when you set the state to `dismissed`.
     */
    state: shared.CodeScanningAlertSetStateEnum;
}
export declare class CodeScanningUpdateAlertRequest extends SpeakeasyBase {
    requestBody: CodeScanningUpdateAlertRequestBody;
    /**
     * The number that identifies an alert. You can find this at the end of the URL for a code scanning alert within GitHub, and in the `number` field in the response from the `GET /repos/{owner}/{repo}/code-scanning/alerts` operation.
     */
    alertNumber: number;
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
export declare class CodeScanningUpdateAlert503ApplicationJSON extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    message?: string;
}
export declare class CodeScanningUpdateAlertResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response if the repository is archived or if GitHub Advanced Security is not enabled for this repository
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    codeScanningAlert?: shared.CodeScanningAlert;
    /**
     * Service unavailable
     */
    codeScanningUpdateAlert503ApplicationJSONObject?: CodeScanningUpdateAlert503ApplicationJSON;
}
