import { SpeakeasyBase } from "../../../internal/utils";
import { CreateFooterRequest } from "./createfooterrequest";
import { CreateFootnoteRequest } from "./createfootnoterequest";
import { CreateHeaderRequest } from "./createheaderrequest";
import { CreateNamedRangeRequest } from "./createnamedrangerequest";
import { CreateParagraphBulletsRequest } from "./createparagraphbulletsrequest";
import { DeleteContentRangeRequest } from "./deletecontentrangerequest";
import { DeleteFooterRequest } from "./deletefooterrequest";
import { DeleteHeaderRequest } from "./deleteheaderrequest";
import { DeleteNamedRangeRequest } from "./deletenamedrangerequest";
import { DeleteParagraphBulletsRequest } from "./deleteparagraphbulletsrequest";
import { DeletePositionedObjectRequest } from "./deletepositionedobjectrequest";
import { DeleteTableColumnRequest } from "./deletetablecolumnrequest";
import { DeleteTableRowRequest } from "./deletetablerowrequest";
import { InsertInlineImageRequest } from "./insertinlineimagerequest";
import { InsertPageBreakRequest } from "./insertpagebreakrequest";
import { InsertSectionBreakRequest } from "./insertsectionbreakrequest";
import { InsertTableColumnRequest } from "./inserttablecolumnrequest";
import { InsertTableRequest } from "./inserttablerequest";
import { InsertTableRowRequest } from "./inserttablerowrequest";
import { InsertTextRequest } from "./inserttextrequest";
import { MergeTableCellsRequest } from "./mergetablecellsrequest";
import { PinTableHeaderRowsRequest } from "./pintableheaderrowsrequest";
import { ReplaceAllTextRequest } from "./replacealltextrequest";
import { ReplaceImageRequest } from "./replaceimagerequest";
import { ReplaceNamedRangeContentRequest } from "./replacenamedrangecontentrequest";
import { UnmergeTableCellsRequest } from "./unmergetablecellsrequest";
import { UpdateDocumentStyleRequest } from "./updatedocumentstylerequest";
import { UpdateParagraphStyleRequest } from "./updateparagraphstylerequest";
import { UpdateSectionStyleRequest } from "./updatesectionstylerequest";
import { UpdateTableCellStyleRequest } from "./updatetablecellstylerequest";
import { UpdateTableColumnPropertiesRequest } from "./updatetablecolumnpropertiesrequest";
import { UpdateTableRowStyleRequest } from "./updatetablerowstylerequest";
import { UpdateTextStyleRequest } from "./updatetextstylerequest";
/**
 * A single update to apply to a document.
 */
export declare class Request extends SpeakeasyBase {
    /**
     * Creates a Footer. The new footer is applied to the SectionStyle at the location of the SectionBreak if specified, otherwise it is applied to the DocumentStyle. If a footer of the specified type already exists, a 400 bad request error is returned.
     */
    createFooter?: CreateFooterRequest;
    /**
     * Creates a Footnote segment and inserts a new FootnoteReference to it at the given location. The new Footnote segment will contain a space followed by a newline character.
     */
    createFootnote?: CreateFootnoteRequest;
    /**
     * Creates a Header. The new header is applied to the SectionStyle at the location of the SectionBreak if specified, otherwise it is applied to the DocumentStyle. If a header of the specified type already exists, a 400 bad request error is returned.
     */
    createHeader?: CreateHeaderRequest;
    /**
     * Creates a NamedRange referencing the given range.
     */
    createNamedRange?: CreateNamedRangeRequest;
    /**
     * Creates bullets for all of the paragraphs that overlap with the given range. The nesting level of each paragraph will be determined by counting leading tabs in front of each paragraph. To avoid excess space between the bullet and the corresponding paragraph, these leading tabs are removed by this request. This may change the indices of parts of the text. If the paragraph immediately before paragraphs being updated is in a list with a matching preset, the paragraphs being updated are added to that preceding list.
     */
    createParagraphBullets?: CreateParagraphBulletsRequest;
    /**
     * Deletes content from the document.
     */
    deleteContentRange?: DeleteContentRangeRequest;
    /**
     * Deletes a Footer from the document.
     */
    deleteFooter?: DeleteFooterRequest;
    /**
     * Deletes a Header from the document.
     */
    deleteHeader?: DeleteHeaderRequest;
    /**
     * Deletes a NamedRange.
     */
    deleteNamedRange?: DeleteNamedRangeRequest;
    /**
     * Deletes bullets from all of the paragraphs that overlap with the given range. The nesting level of each paragraph will be visually preserved by adding indent to the start of the corresponding paragraph.
     */
    deleteParagraphBullets?: DeleteParagraphBulletsRequest;
    /**
     * Deletes a PositionedObject from the document.
     */
    deletePositionedObject?: DeletePositionedObjectRequest;
    /**
     * Deletes a column from a table.
     */
    deleteTableColumn?: DeleteTableColumnRequest;
    /**
     * Deletes a row from a table.
     */
    deleteTableRow?: DeleteTableRowRequest;
    /**
     * Inserts an InlineObject containing an image at the given location.
     */
    insertInlineImage?: InsertInlineImageRequest;
    /**
     * Inserts a page break followed by a newline at the specified location.
     */
    insertPageBreak?: InsertPageBreakRequest;
    /**
     * Inserts a section break at the given location. A newline character will be inserted before the section break.
     */
    insertSectionBreak?: InsertSectionBreakRequest;
    /**
     * Inserts a table at the specified location. A newline character will be inserted before the inserted table.
     */
    insertTable?: InsertTableRequest;
    /**
     * Inserts an empty column into a table.
     */
    insertTableColumn?: InsertTableColumnRequest;
    /**
     * Inserts an empty row into a table.
     */
    insertTableRow?: InsertTableRowRequest;
    /**
     * Inserts text at the specified location.
     */
    insertText?: InsertTextRequest;
    /**
     * Merges cells in a Table.
     */
    mergeTableCells?: MergeTableCellsRequest;
    /**
     * Updates the number of pinned table header rows in a table.
     */
    pinTableHeaderRows?: PinTableHeaderRowsRequest;
    /**
     * Replaces all instances of text matching a criteria with replace text.
     */
    replaceAllText?: ReplaceAllTextRequest;
    /**
     * Replaces an existing image with a new image. Replacing an image removes some image effects from the existing image in order to mirror the behavior of the Docs editor.
     */
    replaceImage?: ReplaceImageRequest;
    /**
     * Replaces the contents of the specified NamedRange or NamedRanges with the given replacement content. Note that an individual NamedRange may consist of multiple discontinuous ranges. In this case, only the content in the first range will be replaced. The other ranges and their content will be deleted. In cases where replacing or deleting any ranges would result in an invalid document structure, a 400 bad request error is returned.
     */
    replaceNamedRangeContent?: ReplaceNamedRangeContentRequest;
    /**
     * Unmerges cells in a Table.
     */
    unmergeTableCells?: UnmergeTableCellsRequest;
    /**
     * Updates the DocumentStyle.
     */
    updateDocumentStyle?: UpdateDocumentStyleRequest;
    /**
     * Update the styling of all paragraphs that overlap with the given range.
     */
    updateParagraphStyle?: UpdateParagraphStyleRequest;
    /**
     * Updates the SectionStyle.
     */
    updateSectionStyle?: UpdateSectionStyleRequest;
    /**
     * Updates the style of a range of table cells.
     */
    updateTableCellStyle?: UpdateTableCellStyleRequest;
    /**
     * Updates the TableColumnProperties of columns in a table.
     */
    updateTableColumnProperties?: UpdateTableColumnPropertiesRequest;
    /**
     * Updates the TableRowStyle of rows in a table.
     */
    updateTableRowStyle?: UpdateTableRowStyleRequest;
    /**
     * Update the styling of text.
     */
    updateTextStyle?: UpdateTextStyleRequest;
}
