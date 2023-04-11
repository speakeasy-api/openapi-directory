import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the placeholder.
 */
export declare enum PlaceholderTypeEnum {
    None = "NONE",
    Body = "BODY",
    Chart = "CHART",
    ClipArt = "CLIP_ART",
    CenteredTitle = "CENTERED_TITLE",
    Diagram = "DIAGRAM",
    DateAndTime = "DATE_AND_TIME",
    Footer = "FOOTER",
    Header = "HEADER",
    Media = "MEDIA",
    Object = "OBJECT",
    Picture = "PICTURE",
    SlideNumber = "SLIDE_NUMBER",
    Subtitle = "SUBTITLE",
    Table = "TABLE",
    Title = "TITLE",
    SlideImage = "SLIDE_IMAGE"
}
/**
 * The placeholder information that uniquely identifies a placeholder shape.
 */
export declare class Placeholder extends SpeakeasyBase {
    /**
     * The index of the placeholder. If the same placeholder types are present in the same page, they would have different index values.
     */
    index?: number;
    /**
     * The object ID of this shape's parent placeholder. If unset, the parent placeholder shape does not exist, so the shape does not inherit properties from any other shape.
     */
    parentObjectId?: string;
    /**
     * The type of the placeholder.
     */
    type?: PlaceholderTypeEnum;
}
