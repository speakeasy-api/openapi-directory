import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SheetsSpreadsheetsValuesBatchGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class SheetsSpreadsheetsValuesBatchGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class SheetsSpreadsheetsValuesBatchGetSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class SheetsSpreadsheetsValuesBatchGetSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class SheetsSpreadsheetsValuesBatchGetSecurityOption5 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class SheetsSpreadsheetsValuesBatchGetSecurity extends SpeakeasyBase {
    option1?: SheetsSpreadsheetsValuesBatchGetSecurityOption1;
    option2?: SheetsSpreadsheetsValuesBatchGetSecurityOption2;
    option3?: SheetsSpreadsheetsValuesBatchGetSecurityOption3;
    option4?: SheetsSpreadsheetsValuesBatchGetSecurityOption4;
    option5?: SheetsSpreadsheetsValuesBatchGetSecurityOption5;
}
/**
 * How dates, times, and durations should be represented in the output. This is ignored if value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER.
 */
export declare enum SheetsSpreadsheetsValuesBatchGetDateTimeRenderOptionEnum {
    SerialNumber = "SERIAL_NUMBER",
    FormattedString = "FORMATTED_STRING"
}
/**
 * The major dimension that results should use. For example, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`, then requesting `ranges=["A1:B2"],majorDimension=ROWS` returns `[[1,2],[3,4]]`, whereas requesting `ranges=["A1:B2"],majorDimension=COLUMNS` returns `[[1,3],[2,4]]`.
 */
export declare enum SheetsSpreadsheetsValuesBatchGetMajorDimensionEnum {
    DimensionUnspecified = "DIMENSION_UNSPECIFIED",
    Rows = "ROWS",
    Columns = "COLUMNS"
}
/**
 * How values should be represented in the output. The default render option is ValueRenderOption.FORMATTED_VALUE.
 */
export declare enum SheetsSpreadsheetsValuesBatchGetValueRenderOptionEnum {
    FormattedValue = "FORMATTED_VALUE",
    UnformattedValue = "UNFORMATTED_VALUE",
    Formula = "FORMULA"
}
export declare class SheetsSpreadsheetsValuesBatchGetRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
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
     * How dates, times, and durations should be represented in the output. This is ignored if value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER.
     */
    dateTimeRenderOption?: SheetsSpreadsheetsValuesBatchGetDateTimeRenderOptionEnum;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The major dimension that results should use. For example, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`, then requesting `ranges=["A1:B2"],majorDimension=ROWS` returns `[[1,2],[3,4]]`, whereas requesting `ranges=["A1:B2"],majorDimension=COLUMNS` returns `[[1,3],[2,4]]`.
     */
    majorDimension?: SheetsSpreadsheetsValuesBatchGetMajorDimensionEnum;
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
     * The [A1 notation or R1C1 notation](/sheets/api/guides/concepts#cell) of the range to retrieve values from.
     */
    ranges?: string[];
    /**
     * The ID of the spreadsheet to retrieve data from.
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
     * How values should be represented in the output. The default render option is ValueRenderOption.FORMATTED_VALUE.
     */
    valueRenderOption?: SheetsSpreadsheetsValuesBatchGetValueRenderOptionEnum;
}
export declare class SheetsSpreadsheetsValuesBatchGetResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    batchGetValuesResponse?: shared.BatchGetValuesResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
