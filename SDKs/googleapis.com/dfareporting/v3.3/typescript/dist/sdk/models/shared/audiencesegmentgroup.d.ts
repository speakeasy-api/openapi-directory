import { SpeakeasyBase } from "../../../internal/utils";
import { AudienceSegment } from "./audiencesegment";
/**
 * Audience Segment Group.
 */
export declare class AudienceSegmentGroup extends SpeakeasyBase {
    /**
     * Audience segments assigned to this group. The number of segments must be between 2 and 100.
     */
    audienceSegments?: AudienceSegment[];
    /**
     * ID of this audience segment group. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Name of this audience segment group. This is a required field and must be less than 65 characters long.
     */
    name?: string;
}
