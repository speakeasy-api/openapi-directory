import { SpeakeasyBase } from "../../../internal/utils";
import { EndOfSegmentLocation } from "./endofsegmentlocation";
import { Location } from "./location";
/**
 * Inserts a table at the specified location. A newline character will be inserted before the inserted table.
 */
export declare class InsertTableRequest extends SpeakeasyBase {
    /**
     * The number of columns in the table.
     */
    columns?: number;
    /**
     * Location at the end of a body, header, footer or footnote. The location is immediately before the last newline in the document segment.
     */
    endOfSegmentLocation?: EndOfSegmentLocation;
    /**
     * A particular location in the document.
     */
    location?: Location;
    /**
     * The number of rows in the table.
     */
    rows?: number;
}
