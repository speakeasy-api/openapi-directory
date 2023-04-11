import { SpeakeasyBase } from "../../../internal/utils";
import { Range } from "./range";
import { SectionStyle } from "./sectionstyle";
/**
 * Updates the SectionStyle.
 */
export declare class UpdateSectionStyleRequest extends SpeakeasyBase {
    /**
     * The fields that should be updated. At least one field must be specified. The root `section_style` is implied and must not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the left margin, set `fields` to `"margin_left"`.
     */
    fields?: string;
    /**
     * Specifies a contiguous range of text.
     */
    range?: Range;
    /**
     * The styling that applies to a section.
     */
    sectionStyle?: SectionStyle;
}
