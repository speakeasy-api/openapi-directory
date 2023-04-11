import { SpeakeasyBase } from "../../../internal/utils";
import { BoundingPoly } from "./boundingpoly";
import { TextSegment } from "./textsegment";
/**
 * The type of the text_segment in document.
 */
export declare enum LayoutTextSegmentTypeEnum {
    TextSegmentTypeUnspecified = "TEXT_SEGMENT_TYPE_UNSPECIFIED",
    Token = "TOKEN",
    Paragraph = "PARAGRAPH",
    FormField = "FORM_FIELD",
    FormFieldName = "FORM_FIELD_NAME",
    FormFieldContents = "FORM_FIELD_CONTENTS",
    Table = "TABLE",
    TableHeader = "TABLE_HEADER",
    TableRow = "TABLE_ROW",
    TableCell = "TABLE_CELL"
}
/**
 * Describes the layout information of a text_segment in the document.
 */
export declare class Layout extends SpeakeasyBase {
    /**
     * A bounding polygon of a detected object on a plane. On output both vertices and normalized_vertices are provided. The polygon is formed by connecting vertices in the order they are listed.
     */
    boundingPoly?: BoundingPoly;
    /**
     * Page number of the text_segment in the original document, starts from 1.
     */
    pageNumber?: number;
    /**
     * A contiguous part of a text (string), assuming it has an UTF-8 NFC encoding.
     */
    textSegment?: TextSegment;
    /**
     * The type of the text_segment in document.
     */
    textSegmentType?: LayoutTextSegmentTypeEnum;
}
