import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Unit of the dimension.
 */
export declare enum DocumentDimensionsUnitEnum {
    DocumentDimensionUnitUnspecified = "DOCUMENT_DIMENSION_UNIT_UNSPECIFIED",
    Inch = "INCH",
    Centimeter = "CENTIMETER",
    Point = "POINT"
}
/**
 * Message that describes dimension of a document.
 */
export declare class DocumentDimensions extends SpeakeasyBase {
    /**
     * Height value of the document, works together with the unit.
     */
    height?: number;
    /**
     * Unit of the dimension.
     */
    unit?: DocumentDimensionsUnitEnum;
    /**
     * Width value of the document, works together with the unit.
     */
    width?: number;
}
