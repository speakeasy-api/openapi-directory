import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Location at the end of a body, header, footer or footnote. The location is immediately before the last newline in the document segment.
 */
export declare class EndOfSegmentLocation extends SpeakeasyBase {
    /**
     * The ID of the header, footer or footnote the location is in. An empty segment ID signifies the document's body.
     */
    segmentId?: string;
}
