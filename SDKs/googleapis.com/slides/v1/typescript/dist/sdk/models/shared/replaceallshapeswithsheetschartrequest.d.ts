import { SpeakeasyBase } from "../../../internal/utils";
import { SubstringMatchCriteria } from "./substringmatchcriteria";
/**
 * The mode with which the chart is linked to the source spreadsheet. When not specified, the chart will be an image that is not linked.
 */
export declare enum ReplaceAllShapesWithSheetsChartRequestLinkingModeEnum {
    NotLinkedImage = "NOT_LINKED_IMAGE",
    Linked = "LINKED"
}
/**
 * Replaces all shapes that match the given criteria with the provided Google Sheets chart. The chart will be scaled and centered to fit within the bounds of the original shape. NOTE: Replacing shapes with a chart requires at least one of the spreadsheets.readonly, spreadsheets, drive.readonly, or drive OAuth scopes.
 */
export declare class ReplaceAllShapesWithSheetsChartRequest extends SpeakeasyBase {
    /**
     * The ID of the specific chart in the Google Sheets spreadsheet.
     */
    chartId?: number;
    /**
     * A criteria that matches a specific string of text in a shape or table.
     */
    containsText?: SubstringMatchCriteria;
    /**
     * The mode with which the chart is linked to the source spreadsheet. When not specified, the chart will be an image that is not linked.
     */
    linkingMode?: ReplaceAllShapesWithSheetsChartRequestLinkingModeEnum;
    /**
     * If non-empty, limits the matches to page elements only on the given pages. Returns a 400 bad request error if given the page object ID of a notes page or a notes master, or if a page with that object ID doesn't exist in the presentation.
     */
    pageObjectIds?: string[];
    /**
     * The ID of the Google Sheets spreadsheet that contains the chart.
     */
    spreadsheetId?: string;
}
