import { SpeakeasyBase } from "../../../internal/utils";
/**
 * JSON template for an Analytics segment.
 */
export declare class Segment extends SpeakeasyBase {
    /**
     * Time the segment was created.
     */
    created?: Date;
    /**
     * Segment definition.
     */
    definition?: string;
    /**
     * Segment ID.
     */
    id?: string;
    /**
     * Resource type for Analytics segment.
     */
    kind?: string;
    /**
     * Segment name.
     */
    name?: string;
    /**
     * Segment ID. Can be used with the 'segment' parameter in Core Reporting API.
     */
    segmentId?: string;
    /**
     * Link for this segment.
     */
    selfLink?: string;
    /**
     * Type for a segment. Possible values are "BUILT_IN" or "CUSTOM".
     */
    type?: string;
    /**
     * Time the segment was last modified.
     */
    updated?: Date;
}
