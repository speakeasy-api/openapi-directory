import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The property by which to sort the results.
 */
export declare enum CodeScanningListAlertsForOrgSortEnum {
    Created = "created",
    Updated = "updated"
}
export declare class CodeScanningListAlertsForOrgRequest extends SpeakeasyBase {
    /**
     * A cursor, as given in the [Link header](https://docs.github.com/github-ae@latest/rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for results after this cursor.
     */
    after?: string;
    /**
     * A cursor, as given in the [Link header](https://docs.github.com/github-ae@latest/rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for results before this cursor.
     */
    before?: string;
    /**
     * The direction to sort the results by.
     */
    direction?: shared.DirectionEnum;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
    /**
     * The property by which to sort the results.
     */
    sort?: CodeScanningListAlertsForOrgSortEnum;
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
export declare class CodeScanningListAlertsForOrg503ApplicationJSON extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    message?: string;
}
export declare class CodeScanningListAlertsForOrgResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    codeScanningOrganizationAlertItems?: shared.CodeScanningOrganizationAlertItems[];
    /**
     * Service unavailable
     */
    codeScanningListAlertsForOrg503ApplicationJSONObject?: CodeScanningListAlertsForOrg503ApplicationJSON;
}
