import { SpeakeasyBase } from "../../../internal/utils";
import { EndOfSegmentLocation } from "./endofsegmentlocation";
import { Location } from "./location";
/**
 * Inserts a page break followed by a newline at the specified location.
 */
export declare class InsertPageBreakRequest extends SpeakeasyBase {
    /**
     * Location at the end of a body, header, footer or footnote. The location is immediately before the last newline in the document segment.
     */
    endOfSegmentLocation?: EndOfSegmentLocation;
    /**
     * A particular location in the document.
     */
    location?: Location;
}
