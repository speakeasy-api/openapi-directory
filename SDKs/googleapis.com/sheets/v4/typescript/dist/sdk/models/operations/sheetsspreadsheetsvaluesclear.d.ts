import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SheetsSpreadsheetsValuesClearSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class SheetsSpreadsheetsValuesClearSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class SheetsSpreadsheetsValuesClearSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class SheetsSpreadsheetsValuesClearSecurity extends SpeakeasyBase {
    option1?: SheetsSpreadsheetsValuesClearSecurityOption1;
    option2?: SheetsSpreadsheetsValuesClearSecurityOption2;
    option3?: SheetsSpreadsheetsValuesClearSecurityOption3;
}
export declare class SheetsSpreadsheetsValuesClearRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    requestBody?: Record<string, any>;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * The [A1 notation or R1C1 notation](/sheets/api/guides/concepts#cell) of the values to clear.
     */
    range: string;
    /**
     * The ID of the spreadsheet to update.
     */
    spreadsheetId: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class SheetsSpreadsheetsValuesClearResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    clearValuesResponse?: shared.ClearValuesResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
