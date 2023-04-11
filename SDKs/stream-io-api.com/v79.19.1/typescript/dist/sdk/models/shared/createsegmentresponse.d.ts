import { SpeakeasyBase } from "../../../internal/utils";
import { Segment } from "./segment";
/**
 * Successful response
 */
export declare class CreateSegmentResponse extends SpeakeasyBase {
    /**
     * Duration of the request in human-readable format
     */
    duration: string;
    segment?: Segment;
}
