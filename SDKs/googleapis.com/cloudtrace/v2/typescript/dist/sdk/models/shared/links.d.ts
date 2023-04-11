import { SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";
/**
 * A collection of links, which are references from this span to a span in the same or different trace.
 */
export declare class Links extends SpeakeasyBase {
    /**
     * The number of dropped links after the maximum size was enforced. If this value is 0, then no links were dropped.
     */
    droppedLinksCount?: number;
    /**
     * A collection of links.
     */
    link?: Link[];
}
