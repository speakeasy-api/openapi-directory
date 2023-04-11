import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SheetsSpreadsheetsSheetsCopyToSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class SheetsSpreadsheetsSheetsCopyToSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class SheetsSpreadsheetsSheetsCopyToSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class SheetsSpreadsheetsSheetsCopyToSecurity extends SpeakeasyBase {
    option1?: SheetsSpreadsheetsSheetsCopyToSecurityOption1;
    option2?: SheetsSpreadsheetsSheetsCopyToSecurityOption2;
    option3?: SheetsSpreadsheetsSheetsCopyToSecurityOption3;
}
export declare class SheetsSpreadsheetsSheetsCopyToRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    copySheetToAnotherSpreadsheetRequest?: shared.CopySheetToAnotherSpreadsheetRequest;
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
     * The ID of the sheet to copy.
     */
    sheetId: number;
    /**
     * The ID of the spreadsheet containing the sheet to copy.
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
export declare class SheetsSpreadsheetsSheetsCopyToResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    sheetProperties?: shared.SheetProperties;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
