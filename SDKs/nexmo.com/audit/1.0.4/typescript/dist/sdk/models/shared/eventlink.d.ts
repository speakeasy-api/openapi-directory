import { SpeakeasyBase } from "../../../internal/utils";
export declare class EventLinkSelf extends SpeakeasyBase {
    /**
     * URI of this document.
     */
    href?: string;
}
/**
 * A link to this audit event object if you were to retrieve it individually.
 */
export declare class EventLink extends SpeakeasyBase {
    self?: EventLinkSelf;
}
