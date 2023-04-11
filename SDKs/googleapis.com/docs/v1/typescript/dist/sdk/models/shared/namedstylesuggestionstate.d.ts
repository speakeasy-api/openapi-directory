import { SpeakeasyBase } from "../../../internal/utils";
import { ParagraphStyleSuggestionState } from "./paragraphstylesuggestionstate";
import { TextStyleSuggestionState } from "./textstylesuggestionstate";
/**
 * The named style type that this suggestion state corresponds to. This field is provided as a convenience for matching the NamedStyleSuggestionState with its corresponding NamedStyle.
 */
export declare enum NamedStyleSuggestionStateNamedStyleTypeEnum {
    NamedStyleTypeUnspecified = "NAMED_STYLE_TYPE_UNSPECIFIED",
    NormalText = "NORMAL_TEXT",
    Title = "TITLE",
    Subtitle = "SUBTITLE",
    Heading1 = "HEADING_1",
    Heading2 = "HEADING_2",
    Heading3 = "HEADING_3",
    Heading4 = "HEADING_4",
    Heading5 = "HEADING_5",
    Heading6 = "HEADING_6"
}
/**
 * A suggestion state of a NamedStyle message.
 */
export declare class NamedStyleSuggestionState extends SpeakeasyBase {
    /**
     * The named style type that this suggestion state corresponds to. This field is provided as a convenience for matching the NamedStyleSuggestionState with its corresponding NamedStyle.
     */
    namedStyleType?: NamedStyleSuggestionStateNamedStyleTypeEnum;
    /**
     * A mask that indicates which of the fields on the base ParagraphStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.
     */
    paragraphStyleSuggestionState?: ParagraphStyleSuggestionState;
    /**
     * A mask that indicates which of the fields on the base TextStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.
     */
    textStyleSuggestionState?: TextStyleSuggestionState;
}
