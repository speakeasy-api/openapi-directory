import { SpeakeasyBase } from "../../../internal/utils";
import { DetectionsResource } from "./detectionsresource";
/**
 * Successful response
 */
export declare class DetectionsListResponse extends SpeakeasyBase {
    /**
     * A detections contains detection results of several text
     */
    detections?: DetectionsResource[][];
}
