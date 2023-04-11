import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2BoundingPoly } from "./googleclouddocumentaiv1beta2boundingpoly";
/**
 * Optional. The type of the layout element that is being referenced if any.
 */
export declare enum GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRefLayoutTypeEnum {
    LayoutTypeUnspecified = "LAYOUT_TYPE_UNSPECIFIED",
    Block = "BLOCK",
    Paragraph = "PARAGRAPH",
    Line = "LINE",
    Token = "TOKEN",
    VisualElement = "VISUAL_ELEMENT",
    Table = "TABLE",
    FormField = "FORM_FIELD"
}
/**
 * Represents a weak reference to a page element within a document.
 */
export declare class GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRef extends SpeakeasyBase {
    /**
     * A bounding polygon for the detected image annotation.
     */
    boundingPoly?: GoogleCloudDocumentaiV1beta2BoundingPoly;
    /**
     * Optional. Confidence of detected page element, if applicable. Range `[0, 1]`.
     */
    confidence?: number;
    /**
     * Optional. Deprecated. Use PageRef.bounding_poly instead.
     */
    layoutId?: string;
    /**
     * Optional. The type of the layout element that is being referenced if any.
     */
    layoutType?: GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRefLayoutTypeEnum;
    /**
     * Required. Index into the Document.pages element, for example using `Document.pages` to locate the related page element. This field is skipped when its value is the default `0`. See https://developers.google.com/protocol-buffers/docs/proto3#json.
     */
    page?: string;
}
