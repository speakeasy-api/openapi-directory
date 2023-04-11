import { SpeakeasyBase } from "../../../internal/utils";
import { BackgroundSuggestionState } from "./backgroundsuggestionstate";
import { SizeSuggestionState } from "./sizesuggestionstate";
/**
 * A mask that indicates which of the fields on the base DocumentStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.
 */
export declare class DocumentStyleSuggestionState extends SpeakeasyBase {
    /**
     * A mask that indicates which of the fields on the base Background have been changed in this suggestion. For any field set to true, the Backgound has a new suggested value.
     */
    backgroundSuggestionState?: BackgroundSuggestionState;
    /**
     * Indicates if there was a suggested change to default_footer_id.
     */
    defaultFooterIdSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to default_header_id.
     */
    defaultHeaderIdSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to even_page_footer_id.
     */
    evenPageFooterIdSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to even_page_header_id.
     */
    evenPageHeaderIdSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to first_page_footer_id.
     */
    firstPageFooterIdSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to first_page_header_id.
     */
    firstPageHeaderIdSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to margin_bottom.
     */
    marginBottomSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to margin_footer.
     */
    marginFooterSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to margin_header.
     */
    marginHeaderSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to margin_left.
     */
    marginLeftSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to margin_right.
     */
    marginRightSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to margin_top.
     */
    marginTopSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to page_number_start.
     */
    pageNumberStartSuggested?: boolean;
    /**
     * A mask that indicates which of the fields on the base Size have been changed in this suggestion. For any field set to true, the Size has a new suggested value.
     */
    pageSizeSuggestionState?: SizeSuggestionState;
    /**
     * Indicates if there was a suggested change to use_custom_header_footer_margins.
     */
    useCustomHeaderFooterMarginsSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to use_even_page_header_footer.
     */
    useEvenPageHeaderFooterSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to use_first_page_header_footer.
     */
    useFirstPageHeaderFooterSuggested?: boolean;
}
