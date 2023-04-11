import { SpeakeasyBase } from "../../../internal/utils";
import { SheetsChartProperties } from "./sheetschartproperties";
/**
 * A PageElement kind representing a linked chart embedded from Google Sheets.
 */
export declare class SheetsChart extends SpeakeasyBase {
    /**
     * The ID of the specific chart in the Google Sheets spreadsheet that is embedded.
     */
    chartId?: number;
    /**
     * The URL of an image of the embedded chart, with a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the image as the original requester. Access to the image may be lost if the presentation's sharing settings change.
     */
    contentUrl?: string;
    /**
     * The properties of the SheetsChart.
     */
    sheetsChartProperties?: SheetsChartProperties;
    /**
     * The ID of the Google Sheets spreadsheet that contains the source chart.
     */
    spreadsheetId?: string;
}
