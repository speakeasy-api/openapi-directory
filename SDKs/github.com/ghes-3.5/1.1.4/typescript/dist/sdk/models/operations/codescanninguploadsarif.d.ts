import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CodeScanningUploadSarifRequestBody extends SpeakeasyBase {
    /**
     * The base directory used in the analysis, as it appears in the SARIF file.
     *
     * @remarks
     * This property is used to convert file paths from absolute to relative, so that alerts can be mapped to their correct location in the repository.
     */
    checkoutUri?: string;
    /**
     * The SHA of the commit to which the analysis you are uploading relates.
     */
    commitSha: string;
    /**
     * The full Git reference, formatted as `refs/heads/<branch name>`,
     *
     * @remarks
     * `refs/pull/<number>/merge`, or `refs/pull/<number>/head`.
     */
    ref: string;
    /**
     * A Base64 string representing the SARIF file to upload. You must first compress your SARIF file using [`gzip`](http://www.gnu.org/software/gzip/manual/gzip.html) and then translate the contents of the file into a Base64 encoding string. For more information, see "[SARIF support for code scanning](https://docs.github.com/enterprise-server@3.5/code-security/secure-coding/sarif-support-for-code-scanning)."
     */
    sarif: string;
    /**
     * The time that the analysis run began. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    startedAt?: Date;
    /**
     * The name of the tool used to generate the code scanning analysis. If this parameter is not used, the tool name defaults to "API". If the uploaded SARIF contains a tool GUID, this will be available for filtering using the `tool_guid` parameter of operations such as `GET /repos/{owner}/{repo}/code-scanning/alerts`.
     */
    toolName?: string;
}
export declare class CodeScanningUploadSarifRequest extends SpeakeasyBase {
    requestBody: CodeScanningUploadSarifRequestBody;
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
export declare class CodeScanningUploadSarif503ApplicationJSON extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    message?: string;
}
export declare class CodeScanningUploadSarifResponse extends SpeakeasyBase {
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
    codeScanningSarifsReceipt?: shared.CodeScanningSarifsReceipt;
    /**
     * Service unavailable
     */
    codeScanningUploadSarif503ApplicationJSONObject?: CodeScanningUploadSarif503ApplicationJSON;
}
