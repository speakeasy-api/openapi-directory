import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SheetsSpreadsheetsValuesAppendSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class SheetsSpreadsheetsValuesAppendSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class SheetsSpreadsheetsValuesAppendSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class SheetsSpreadsheetsValuesAppendSecurity extends SpeakeasyBase {
    option1?: SheetsSpreadsheetsValuesAppendSecurityOption1;
    option2?: SheetsSpreadsheetsValuesAppendSecurityOption2;
    option3?: SheetsSpreadsheetsValuesAppendSecurityOption3;
}
/**
 * How the input data should be inserted.
 */
export declare enum SheetsSpreadsheetsValuesAppendInsertDataOptionEnum {
    Overwrite = "OVERWRITE",
    InsertRows = "INSERT_ROWS"
}
/**
 * Determines how dates, times, and durations in the response should be rendered. This is ignored if response_value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER.
 */
export declare enum SheetsSpreadsheetsValuesAppendResponseDateTimeRenderOptionEnum {
    SerialNumber = "SERIAL_NUMBER",
    FormattedString = "FORMATTED_STRING"
}
/**
 * Determines how values in the response should be rendered. The default render option is FORMATTED_VALUE.
 */
export declare enum SheetsSpreadsheetsValuesAppendResponseValueRenderOptionEnum {
    FormattedValue = "FORMATTED_VALUE",
    UnformattedValue = "UNFORMATTED_VALUE",
    Formula = "FORMULA"
}
/**
 * How the input data should be interpreted.
 */
export declare enum SheetsSpreadsheetsValuesAppendValueInputOptionEnum {
    InputValueOptionUnspecified = "INPUT_VALUE_OPTION_UNSPECIFIED",
    Raw = "RAW",
    UserEntered = "USER_ENTERED"
}
export declare class SheetsSpreadsheetsValuesAppendRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    valueRange?: shared.ValueRange;
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
     * Determines if the update response should include the values of the cells that were appended. By default, responses do not include the updated values.
     */
    includeValuesInResponse?: boolean;
    /**
     * How the input data should be inserted.
     */
    insertDataOption?: SheetsSpreadsheetsValuesAppendInsertDataOptionEnum;
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
     * The [A1 notation](/sheets/api/guides/concepts#cell) of a range to search for a logical table of data. Values are appended after the last row of the table.
     */
    range: string;
    /**
     * Determines how dates, times, and durations in the response should be rendered. This is ignored if response_value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER.
     */
    responseDateTimeRenderOption?: SheetsSpreadsheetsValuesAppendResponseDateTimeRenderOptionEnum;
    /**
     * Determines how values in the response should be rendered. The default render option is FORMATTED_VALUE.
     */
    responseValueRenderOption?: SheetsSpreadsheetsValuesAppendResponseValueRenderOptionEnum;
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
    /**
     * How the input data should be interpreted.
     */
    valueInputOption?: SheetsSpreadsheetsValuesAppendValueInputOptionEnum;
}
export declare class SheetsSpreadsheetsValuesAppendResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    appendValuesResponse?: shared.AppendValuesResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
