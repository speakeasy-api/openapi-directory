import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Audience Segment.
 */
export declare class AudienceSegment extends SpeakeasyBase {
    /**
     * Weight allocated to this segment. The weight assigned will be understood in proportion to the weights assigned to other segments in the same segment group. Acceptable values are 1 to 1000, inclusive.
     */
    allocation?: number;
    /**
     * ID of this audience segment. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Name of this audience segment. This is a required field and must be less than 65 characters long.
     */
    name?: string;
}
