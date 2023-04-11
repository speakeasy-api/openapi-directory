import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A reference to a linked chart embedded from Google Sheets.
 */
export declare class SheetsChartReference extends SpeakeasyBase {
    /**
     * The ID of the specific chart in the Google Sheets spreadsheet that's embedded.
     */
    chartId?: number;
    /**
     * The ID of the Google Sheets spreadsheet that contains the source chart.
     */
    spreadsheetId?: string;
}
