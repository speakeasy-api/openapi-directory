import { SpeakeasyBase } from "../../../internal/utils";
/**
 * If set, indicates this is a link to a slide in this presentation, addressed by its position.
 */
export declare enum LinkRelativeLinkEnum {
    RelativeSlideLinkUnspecified = "RELATIVE_SLIDE_LINK_UNSPECIFIED",
    NextSlide = "NEXT_SLIDE",
    PreviousSlide = "PREVIOUS_SLIDE",
    FirstSlide = "FIRST_SLIDE",
    LastSlide = "LAST_SLIDE"
}
/**
 * A hypertext link.
 */
export declare class Link extends SpeakeasyBase {
    /**
     * If set, indicates this is a link to the specific page in this presentation with this ID. A page with this ID may not exist.
     */
    pageObjectId?: string;
    /**
     * If set, indicates this is a link to a slide in this presentation, addressed by its position.
     */
    relativeLink?: LinkRelativeLinkEnum;
    /**
     * If set, indicates this is a link to the slide at this zero-based index in the presentation. There may not be a slide at this index.
     */
    slideIndex?: number;
    /**
     * If set, indicates this is a link to the external web page at this URL.
     */
    url?: string;
}
