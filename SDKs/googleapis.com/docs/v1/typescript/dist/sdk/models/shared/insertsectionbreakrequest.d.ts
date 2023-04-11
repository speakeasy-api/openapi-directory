import { SpeakeasyBase } from "../../../internal/utils";
import { EndOfSegmentLocation } from "./endofsegmentlocation";
import { Location } from "./location";
/**
 * The type of section to insert.
 */
export declare enum InsertSectionBreakRequestSectionTypeEnum {
    SectionTypeUnspecified = "SECTION_TYPE_UNSPECIFIED",
    Continuous = "CONTINUOUS",
    NextPage = "NEXT_PAGE"
}
/**
 * Inserts a section break at the given location. A newline character will be inserted before the section break.
 */
export declare class InsertSectionBreakRequest extends SpeakeasyBase {
    /**
     * Location at the end of a body, header, footer or footnote. The location is immediately before the last newline in the document segment.
     */
    endOfSegmentLocation?: EndOfSegmentLocation;
    /**
     * A particular location in the document.
     */
    location?: Location;
    /**
     * The type of section to insert.
     */
    sectionType?: InsertSectionBreakRequestSectionTypeEnum;
}
