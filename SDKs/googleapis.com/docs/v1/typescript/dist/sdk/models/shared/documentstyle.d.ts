import { SpeakeasyBase } from "../../../internal/utils";
import { Background } from "./background";
import { Dimension } from "./dimension";
import { Size } from "./size";
/**
 * The style of the document.
 */
export declare class DocumentStyle extends SpeakeasyBase {
    /**
     * Represents the background of a document.
     */
    background?: Background;
    /**
     * The ID of the default footer. If not set, there's no default footer. This property is read-only.
     */
    defaultFooterId?: string;
    /**
     * The ID of the default header. If not set, there's no default header. This property is read-only.
     */
    defaultHeaderId?: string;
    /**
     * The ID of the footer used only for even pages. The value of use_even_page_header_footer determines whether to use the default_footer_id or this value for the footer on even pages. If not set, there's no even page footer. This property is read-only.
     */
    evenPageFooterId?: string;
    /**
     * The ID of the header used only for even pages. The value of use_even_page_header_footer determines whether to use the default_header_id or this value for the header on even pages. If not set, there's no even page header. This property is read-only.
     */
    evenPageHeaderId?: string;
    /**
     * The ID of the footer used only for the first page. If not set then a unique footer for the first page does not exist. The value of use_first_page_header_footer determines whether to use the default_footer_id or this value for the footer on the first page. If not set, there's no first page footer. This property is read-only.
     */
    firstPageFooterId?: string;
    /**
     * The ID of the header used only for the first page. If not set then a unique header for the first page does not exist. The value of use_first_page_header_footer determines whether to use the default_header_id or this value for the header on the first page. If not set, there's no first page header. This property is read-only.
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
     * The page number from which to start counting the number of pages.
     */
    pageNumberStart?: number;
    /**
     * A width and height.
     */
    pageSize?: Size;
    /**
     * Indicates whether DocumentStyle margin_header, SectionStyle margin_header and DocumentStyle margin_footer, SectionStyle margin_footer are respected. When false, the default values in the Docs editor for header and footer margin are used. This property is read-only.
     */
    useCustomHeaderFooterMargins?: boolean;
    /**
     * Indicates whether to use the even page header / footer IDs for the even pages.
     */
    useEvenPageHeaderFooter?: boolean;
    /**
     * Indicates whether to use the first page header / footer IDs for the first page.
     */
    useFirstPageHeaderFooter?: boolean;
}
