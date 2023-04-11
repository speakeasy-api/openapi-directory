import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The property by which to sort the results.
 */
export declare enum CodeScanningListAlertsForRepoSortEnum {
    Created = "created",
    Updated = "updated"
}
export declare class CodeScanningListAlertsForRepoRequest extends SpeakeasyBase {
    /**
     * The direction to sort the results by.
     */
    direction?: shared.DirectionEnum;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
    /**
     * The Git reference for the results you want to list. The `ref` for a branch can be formatted either as `refs/heads/<branch name>` or simply `<branch name>`. To reference a pull request use `refs/pull/<number>/merge`.
     */
    ref?: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
    /**
     * The property by which to sort the results.
     */
    sort?: CodeScanningListAlertsForRepoSortEnum;
    /**
     * If specified, only code scanning alerts with this state will be returned.
     */
    state?: shared.CodeScanningAlertStateEnum;
    /**
     * The GUID of a code scanning tool. Only results by this tool will be listed. Note that some code scanning tools may not include a GUID in their analysis data. You can specify the tool by using either `tool_guid` or `tool_name`, but not both.
     */
    toolGuid?: string;
    /**
     * The name of a code scanning tool. Only results by this tool will be listed. You can specify the tool by using either `tool_name` or `tool_guid`, but not both.
     */
    toolName?: string;
}
/**
 * Service unavailable
 */
export declare class CodeScanningListAlertsForRepo503ApplicationJSON extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    message?: string;
}
export declare class CodeScanningListAlertsForRepoResponse extends SpeakeasyBase {
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
    codeScanningAlertItems?: shared.CodeScanningAlertItems[];
    /**
     * Service unavailable
     */
    codeScanningListAlertsForRepo503ApplicationJSONObject?: CodeScanningListAlertsForRepo503ApplicationJSON;
}
