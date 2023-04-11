import { SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
import { SectionColumnProperties } from "./sectioncolumnproperties";
/**
 * The style of column separators. This style can be set even when there's one column in the section. When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error.
 */
export declare enum SectionStyleColumnSeparatorStyleEnum {
    ColumnSeparatorStyleUnspecified = "COLUMN_SEPARATOR_STYLE_UNSPECIFIED",
    None = "NONE",
    BetweenEachColumn = "BETWEEN_EACH_COLUMN"
}
/**
 * The content direction of this section. If unset, the value defaults to LEFT_TO_RIGHT. When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error.
 */
export declare enum SectionStyleContentDirectionEnum {
    ContentDirectionUnspecified = "CONTENT_DIRECTION_UNSPECIFIED",
    LeftToRight = "LEFT_TO_RIGHT",
    RightToLeft = "RIGHT_TO_LEFT"
}
/**
 * Output only. The type of section.
 */
export declare enum SectionStyleSectionTypeEnum {
    SectionTypeUnspecified = "SECTION_TYPE_UNSPECIFIED",
    Continuous = "CONTINUOUS",
    NextPage = "NEXT_PAGE"
}
/**
 * The styling that applies to a section.
 */
export declare class SectionStyle extends SpeakeasyBase {
    /**
     * The section's columns properties. If empty, the section contains one column with the default properties in the Docs editor. A section can be updated to have no more than 3 columns. When updating this property, setting a concrete value is required. Unsetting this property will result in a 400 bad request error.
     */
    columnProperties?: SectionColumnProperties[];
    /**
     * The style of column separators. This style can be set even when there's one column in the section. When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error.
     */
    columnSeparatorStyle?: SectionStyleColumnSeparatorStyleEnum;
    /**
     * The content direction of this section. If unset, the value defaults to LEFT_TO_RIGHT. When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error.
     */
    contentDirection?: SectionStyleContentDirectionEnum;
    /**
     * The ID of the default footer. If unset, the value inherits from the previous SectionBreak's SectionStyle. If the value is unset in the first SectionBreak, it inherits from DocumentStyle's default_footer_id. This property is read-only.
     */
    defaultFooterId?: string;
    /**
     * The ID of the default header. If unset, the value inherits from the previous SectionBreak's SectionStyle. If the value is unset in the first SectionBreak, it inherits from DocumentStyle's default_header_id. This property is read-only.
     */
    defaultHeaderId?: string;
    /**
     * The ID of the footer used only for even pages. If the value of DocumentStyle's use_even_page_header_footer is true, this value is used for the footers on even pages in the section. If it is false, the footers on even pages use the default_footer_id. If unset, the value inherits from the previous SectionBreak's SectionStyle. If the value is unset in the first SectionBreak, it inherits from DocumentStyle's even_page_footer_id. This property is read-only.
     */
    evenPageFooterId?: string;
    /**
     * The ID of the header used only for even pages. If the value of DocumentStyle's use_even_page_header_footer is true, this value is used for the headers on even pages in the section. If it is false, the headers on even pages use the default_header_id. If unset, the value inherits from the previous SectionBreak's SectionStyle. If the value is unset in the first SectionBreak, it inherits from DocumentStyle's even_page_header_id. This property is read-only.
     */
    evenPageHeaderId?: string;
    /**
     * The ID of the footer used only for the first page of the section. If use_first_page_header_footer is true, this value is used for the footer on the first page of the section. If it's false, the footer on the first page of the section uses the default_footer_id. If unset, the value inherits from the previous SectionBreak's SectionStyle. If the value is unset in the first SectionBreak, it inherits from DocumentStyle's first_page_footer_id. This property is read-only.
     */
    firstPageFooterId?: string;
    /**
     * The ID of the header used only for the first page of the section. If use_first_page_header_footer is true, this value is used for the header on the first page of the section. If it's false, the header on the first page of the section uses the default_header_id. If unset, the value inherits from the previous SectionBreak's SectionStyle. If the value is unset in the first SectionBreak, it inherits from DocumentStyle's first_page_header_id. This property is read-only.
     */
    firstPageHeaderId?: string;
    /**
     * A magnitude in a single direction in the specified units.
     */
    marginBottom?: Dimension;
    /**
     * A magnitude in a single direction in the specified units.
     */
    marginFooter?: Dimension;
    /**
     * A magnitude in a single direction in the specified units.
     */
    marginHeader?: Dimension;
    /**
     * A magnitude in a single direction in the specified units.
     */
    marginLeft?: Dimension;
    /**
     * A magnitude in a single direction in the specified units.
     */
    marginRight?: Dimension;
    /**
     * A magnitude in a single direction in the specified units.
     */
    marginTop?: Dimension;
    /**
     * The page number from which to start counting the number of pages for this section. If unset, page numbering continues from the previous section. If the value is unset in the first SectionBreak, refer to DocumentStyle's page_number_start. When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error.
     */
    pageNumberStart?: number;
    /**
     * Output only. The type of section.
     */
    sectionType?: SectionStyleSectionTypeEnum;
    /**
     * Indicates whether to use the first page header / footer IDs for the first page of the section. If unset, it inherits from DocumentStyle's use_first_page_header_footer for the first section. If the value is unset for subsequent sectors, it should be interpreted as false. When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error.
     */
    useFirstPageHeaderFooter?: boolean;
}
