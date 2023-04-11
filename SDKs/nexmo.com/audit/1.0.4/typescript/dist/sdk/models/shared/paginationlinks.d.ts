import { SpeakeasyBase } from "../../../internal/utils";
export declare class PaginationLinksLast extends SpeakeasyBase {
    /**
     * URI of the last document in the sequence.
     */
    href?: string;
}
export declare class PaginationLinksNext extends SpeakeasyBase {
    /**
     * URI of the next document.
     */
    href?: string;
}
export declare class PaginationLinksSelf extends SpeakeasyBase {
    /**
     * URI of this document.
     */
    href?: string;
}
/**
 * Container containing self, next and last page links.
 */
export declare class PaginationLinks extends SpeakeasyBase {
    last?: PaginationLinksLast;
    next?: PaginationLinksNext;
    self?: PaginationLinksSelf;
}
