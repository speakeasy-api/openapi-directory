import { SpeakeasyBase } from "../../../internal/utils";
import { EventTag } from "./eventtag";
/**
 * Event Tag List Response
 */
export declare class EventTagsListResponse extends SpeakeasyBase {
    /**
     * Event tag collection.
     */
    eventTags?: EventTag[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#eventTagsListResponse".
     */
    kind?: string;
}
