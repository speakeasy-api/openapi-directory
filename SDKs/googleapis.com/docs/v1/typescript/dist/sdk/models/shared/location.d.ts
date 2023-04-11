import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A particular location in the document.
 */
export declare class Location extends SpeakeasyBase {
    /**
     * The zero-based index, in UTF-16 code units. The index is relative to the beginning of the segment specified by segment_id.
     */
    index?: number;
    /**
     * The ID of the header, footer or footnote the location is in. An empty segment ID signifies the document's body.
     */
    segmentId?: string;
}
