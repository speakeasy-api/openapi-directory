import { SpeakeasyBase } from "../../../internal/utils";
import { EndOfSegmentLocation } from "./endofsegmentlocation";
import { Location } from "./location";
/**
 * Creates a Footnote segment and inserts a new FootnoteReference to it at the given location. The new Footnote segment will contain a space followed by a newline character.
 */
export declare class CreateFootnoteRequest extends SpeakeasyBase {
    /**
     * Location at the end of a body, header, footer or footnote. The location is immediately before the last newline in the document segment.
     */
    endOfSegmentLocation?: EndOfSegmentLocation;
    /**
     * A particular location in the document.
     */
    location?: Location;
}
