import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SheetsSpreadsheetsValuesUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class SheetsSpreadsheetsValuesUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class SheetsSpreadsheetsValuesUpdateSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class SheetsSpreadsheetsValuesUpdateSecurity extends SpeakeasyBase {
    option1?: SheetsSpreadsheetsValuesUpdateSecurityOption1;
    option2?: SheetsSpreadsheetsValuesUpdateSecurityOption2;
    option3?: SheetsSpreadsheetsValuesUpdateSecurityOption3;
}
/**
 * Determines how dates, times, and durations in the response should be rendered. This is ignored if response_value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER.
 */
export declare enum SheetsSpreadsheetsValuesUpdateResponseDateTimeRenderOptionEnum {
    SerialNumber = "SERIAL_NUMBER",
    FormattedString = "FORMATTED_STRING"
}
/**
 * Determines how values in the response should be rendered. The default render option is FORMATTED_VALUE.
 */
export declare enum SheetsSpreadsheetsValuesUpdateResponseValueRenderOptionEnum {
    FormattedValue = "FORMATTED_VALUE",
    UnformattedValue = "UNFORMATTED_VALUE",
    Formula = "FORMULA"
}
/**
 * How the input data should be interpreted.
 */
export declare enum SheetsSpreadsheetsValuesUpdateValueInputOptionEnum {
    InputValueOptionUnspecified = "INPUT_VALUE_OPTION_UNSPECIFIED",
    Raw = "RAW",
    UserEntered = "USER_ENTERED"
}
export declare class SheetsSpreadsheetsValuesUpdateRequest extends SpeakeasyBase {
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
     * Determines if the update response should include the values of the cells that were updated. By default, responses do not include the updated values. If the range to write was larger than the range actually written, the response includes all values in the requested range (excluding trailing empty rows and columns).
     */
    includeValuesInResponse?: boolean;
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
     * The [A1 notation](/sheets/api/guides/concepts#cell) of the values to update.
     */
    range: string;
    /**
     * Determines how dates, times, and durations in the response should be rendered. This is ignored if response_value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER.
     */
    responseDateTimeRenderOption?: SheetsSpreadsheetsValuesUpdateResponseDateTimeRenderOptionEnum;
    /**
     * Determines how values in the response should be rendered. The default render option is FORMATTED_VALUE.
     */
    responseValueRenderOption?: SheetsSpreadsheetsValuesUpdateResponseValueRenderOptionEnum;
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
    valueInputOption?: SheetsSpreadsheetsValuesUpdateValueInputOptionEnum;
}
export declare class SheetsSpreadsheetsValuesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response
     */
    updateValuesResponse?: shared.UpdateValuesResponse;
}
