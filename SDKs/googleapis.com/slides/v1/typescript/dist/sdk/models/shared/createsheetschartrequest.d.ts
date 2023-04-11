import { SpeakeasyBase } from "../../../internal/utils";
import { PageElementProperties } from "./pageelementproperties";
/**
 * The mode with which the chart is linked to the source spreadsheet. When not specified, the chart will be an image that is not linked.
 */
export declare enum CreateSheetsChartRequestLinkingModeEnum {
    NotLinkedImage = "NOT_LINKED_IMAGE",
    Linked = "LINKED"
}
/**
 * Creates an embedded Google Sheets chart. NOTE: Chart creation requires at least one of the spreadsheets.readonly, spreadsheets, drive.readonly, drive.file, or drive OAuth scopes.
 */
export declare class CreateSheetsChartRequest extends SpeakeasyBase {
    /**
     * The ID of the specific chart in the Google Sheets spreadsheet.
     */
    chartId?: number;
    /**
     * Common properties for a page element. Note: When you initially create a PageElement, the API may modify the values of both `size` and `transform`, but the visual size will be unchanged.
     */
    elementProperties?: PageElementProperties;
    /**
     * The mode with which the chart is linked to the source spreadsheet. When not specified, the chart will be an image that is not linked.
     */
    linkingMode?: CreateSheetsChartRequestLinkingModeEnum;
    /**
     * A user-supplied object ID. If specified, the ID must be unique among all pages and page elements in the presentation. The ID should start with a word character [a-zA-Z0-9_] and then followed by any number of the following characters [a-zA-Z0-9_-:]. The length of the ID should not be less than 5 or greater than 50. If empty, a unique identifier will be generated.
     */
    objectId?: string;
    /**
     * The ID of the Google Sheets spreadsheet that contains the chart. You might need to add a resource key to the HTTP header for a subset of old files. For more information, see [Access link-shared files using resource keys](https://developers.google.com/drive/api/v3/resource-keys).
     */
    spreadsheetId?: string;
}
