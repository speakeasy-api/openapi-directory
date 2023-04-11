import { SpeakeasyBase } from "../../../internal/utils";
import { CreateImageRequest } from "./createimagerequest";
import { CreateLineRequest } from "./createlinerequest";
import { CreateParagraphBulletsRequest } from "./createparagraphbulletsrequest";
import { CreateShapeRequest } from "./createshaperequest";
import { CreateSheetsChartRequest } from "./createsheetschartrequest";
import { CreateSlideRequest } from "./createsliderequest";
import { CreateTableRequest } from "./createtablerequest";
import { CreateVideoRequest } from "./createvideorequest";
import { DeleteObjectRequest } from "./deleteobjectrequest";
import { DeleteParagraphBulletsRequest } from "./deleteparagraphbulletsrequest";
import { DeleteTableColumnRequest } from "./deletetablecolumnrequest";
import { DeleteTableRowRequest } from "./deletetablerowrequest";
import { DeleteTextRequest } from "./deletetextrequest";
import { DuplicateObjectRequest } from "./duplicateobjectrequest";
import { GroupObjectsRequest } from "./groupobjectsrequest";
import { InsertTableColumnsRequest } from "./inserttablecolumnsrequest";
import { InsertTableRowsRequest } from "./inserttablerowsrequest";
import { InsertTextRequest } from "./inserttextrequest";
import { MergeTableCellsRequest } from "./mergetablecellsrequest";
import { RefreshSheetsChartRequest } from "./refreshsheetschartrequest";
import { ReplaceAllShapesWithImageRequest } from "./replaceallshapeswithimagerequest";
import { ReplaceAllShapesWithSheetsChartRequest } from "./replaceallshapeswithsheetschartrequest";
import { ReplaceAllTextRequest } from "./replacealltextrequest";
import { ReplaceImageRequest } from "./replaceimagerequest";
import { RerouteLineRequest } from "./reroutelinerequest";
import { UngroupObjectsRequest } from "./ungroupobjectsrequest";
import { UnmergeTableCellsRequest } from "./unmergetablecellsrequest";
import { UpdateImagePropertiesRequest } from "./updateimagepropertiesrequest";
import { UpdateLineCategoryRequest } from "./updatelinecategoryrequest";
import { UpdateLinePropertiesRequest } from "./updatelinepropertiesrequest";
import { UpdatePageElementAltTextRequest } from "./updatepageelementalttextrequest";
import { UpdatePageElementsZOrderRequest } from "./updatepageelementszorderrequest";
import { UpdatePageElementTransformRequest } from "./updatepageelementtransformrequest";
import { UpdatePagePropertiesRequest } from "./updatepagepropertiesrequest";
import { UpdateParagraphStyleRequest } from "./updateparagraphstylerequest";
import { UpdateShapePropertiesRequest } from "./updateshapepropertiesrequest";
import { UpdateSlidePropertiesRequest } from "./updateslidepropertiesrequest";
import { UpdateSlidesPositionRequest } from "./updateslidespositionrequest";
import { UpdateTableBorderPropertiesRequest } from "./updatetableborderpropertiesrequest";
import { UpdateTableCellPropertiesRequest } from "./updatetablecellpropertiesrequest";
import { UpdateTableColumnPropertiesRequest } from "./updatetablecolumnpropertiesrequest";
import { UpdateTableRowPropertiesRequest } from "./updatetablerowpropertiesrequest";
import { UpdateTextStyleRequest } from "./updatetextstylerequest";
import { UpdateVideoPropertiesRequest } from "./updatevideopropertiesrequest";
/**
 * A single kind of update to apply to a presentation.
 */
export declare class Request extends SpeakeasyBase {
    /**
     * Creates an image.
     */
    createImage?: CreateImageRequest;
    /**
     * Creates a line.
     */
    createLine?: CreateLineRequest;
    /**
     * Creates bullets for all of the paragraphs that overlap with the given text index range. The nesting level of each paragraph will be determined by counting leading tabs in front of each paragraph. To avoid excess space between the bullet and the corresponding paragraph, these leading tabs are removed by this request. This may change the indices of parts of the text. If the paragraph immediately before paragraphs being updated is in a list with a matching preset, the paragraphs being updated are added to that preceding list.
     */
    createParagraphBullets?: CreateParagraphBulletsRequest;
    /**
     * Creates a new shape.
     */
    createShape?: CreateShapeRequest;
    /**
     * Creates an embedded Google Sheets chart. NOTE: Chart creation requires at least one of the spreadsheets.readonly, spreadsheets, drive.readonly, drive.file, or drive OAuth scopes.
     */
    createSheetsChart?: CreateSheetsChartRequest;
    /**
     * Creates a slide.
     */
    createSlide?: CreateSlideRequest;
    /**
     * Creates a new table.
     */
    createTable?: CreateTableRequest;
    /**
     * Creates a video. NOTE: Creating a video from Google Drive requires that the requesting app have at least one of the drive, drive.readonly, or drive.file OAuth scopes.
     */
    createVideo?: CreateVideoRequest;
    /**
     * Deletes an object, either pages or page elements, from the presentation.
     */
    deleteObject?: DeleteObjectRequest;
    /**
     * Deletes bullets from all of the paragraphs that overlap with the given text index range. The nesting level of each paragraph will be visually preserved by adding indent to the start of the corresponding paragraph.
     */
    deleteParagraphBullets?: DeleteParagraphBulletsRequest;
    /**
     * Deletes a column from a table.
     */
    deleteTableColumn?: DeleteTableColumnRequest;
    /**
     * Deletes a row from a table.
     */
    deleteTableRow?: DeleteTableRowRequest;
    /**
     * Deletes text from a shape or a table cell.
     */
    deleteText?: DeleteTextRequest;
    /**
     * Duplicates a slide or page element. When duplicating a slide, the duplicate slide will be created immediately following the specified slide. When duplicating a page element, the duplicate will be placed on the same page at the same position as the original.
     */
    duplicateObject?: DuplicateObjectRequest;
    /**
     * Groups objects to create an object group. For example, groups PageElements to create a Group on the same page as all the children.
     */
    groupObjects?: GroupObjectsRequest;
    /**
     * Inserts columns into a table. Other columns in the table will be resized to fit the new column.
     */
    insertTableColumns?: InsertTableColumnsRequest;
    /**
     * Inserts rows into a table.
     */
    insertTableRows?: InsertTableRowsRequest;
    /**
     * Inserts text into a shape or a table cell.
     */
    insertText?: InsertTextRequest;
    /**
     * Merges cells in a Table.
     */
    mergeTableCells?: MergeTableCellsRequest;
    /**
     * Refreshes an embedded Google Sheets chart by replacing it with the latest version of the chart from Google Sheets. NOTE: Refreshing charts requires at least one of the spreadsheets.readonly, spreadsheets, drive.readonly, or drive OAuth scopes.
     */
    refreshSheetsChart?: RefreshSheetsChartRequest;
    /**
     * Replaces all shapes that match the given criteria with the provided image. The images replacing the shapes are rectangular after being inserted into the presentation and do not take on the forms of the shapes.
     */
    replaceAllShapesWithImage?: ReplaceAllShapesWithImageRequest;
    /**
     * Replaces all shapes that match the given criteria with the provided Google Sheets chart. The chart will be scaled and centered to fit within the bounds of the original shape. NOTE: Replacing shapes with a chart requires at least one of the spreadsheets.readonly, spreadsheets, drive.readonly, or drive OAuth scopes.
     */
    replaceAllShapesWithSheetsChart?: ReplaceAllShapesWithSheetsChartRequest;
    /**
     * Replaces all instances of text matching a criteria with replace text.
     */
    replaceAllText?: ReplaceAllTextRequest;
    /**
     * Replaces an existing image with a new image. Replacing an image removes some image effects from the existing image.
     */
    replaceImage?: ReplaceImageRequest;
    /**
     * Reroutes a line such that it's connected at the two closest connection sites on the connected page elements.
     */
    rerouteLine?: RerouteLineRequest;
    /**
     * Ungroups objects, such as groups.
     */
    ungroupObjects?: UngroupObjectsRequest;
    /**
     * Unmerges cells in a Table.
     */
    unmergeTableCells?: UnmergeTableCellsRequest;
    /**
     * Update the properties of an Image.
     */
    updateImageProperties?: UpdateImagePropertiesRequest;
    /**
     * Updates the category of a line.
     */
    updateLineCategory?: UpdateLineCategoryRequest;
    /**
     * Updates the properties of a Line.
     */
    updateLineProperties?: UpdateLinePropertiesRequest;
    /**
     * Updates the alt text title and/or description of a page element.
     */
    updatePageElementAltText?: UpdatePageElementAltTextRequest;
    /**
     * Updates the transform of a page element. Updating the transform of a group will change the absolute transform of the page elements in that group, which can change their visual appearance. See the documentation for PageElement.transform for more details.
     */
    updatePageElementTransform?: UpdatePageElementTransformRequest;
    /**
     * Updates the Z-order of page elements. Z-order is an ordering of the elements on the page from back to front. The page element in the front may cover the elements that are behind it.
     */
    updatePageElementsZOrder?: UpdatePageElementsZOrderRequest;
    /**
     * Updates the properties of a Page.
     */
    updatePageProperties?: UpdatePagePropertiesRequest;
    /**
     * Updates the styling for all of the paragraphs within a Shape or Table that overlap with the given text index range.
     */
    updateParagraphStyle?: UpdateParagraphStyleRequest;
    /**
     * Update the properties of a Shape.
     */
    updateShapeProperties?: UpdateShapePropertiesRequest;
    /**
     * Updates the properties of a Slide.
     */
    updateSlideProperties?: UpdateSlidePropertiesRequest;
    /**
     * Updates the position of slides in the presentation.
     */
    updateSlidesPosition?: UpdateSlidesPositionRequest;
    /**
     * Updates the properties of the table borders in a Table.
     */
    updateTableBorderProperties?: UpdateTableBorderPropertiesRequest;
    /**
     * Update the properties of a TableCell.
     */
    updateTableCellProperties?: UpdateTableCellPropertiesRequest;
    /**
     * Updates the properties of a Table column.
     */
    updateTableColumnProperties?: UpdateTableColumnPropertiesRequest;
    /**
     * Updates the properties of a Table row.
     */
    updateTableRowProperties?: UpdateTableRowPropertiesRequest;
    /**
     * Update the styling of text in a Shape or Table.
     */
    updateTextStyle?: UpdateTextStyleRequest;
    /**
     * Update the properties of a Video.
     */
    updateVideoProperties?: UpdateVideoPropertiesRequest;
}
