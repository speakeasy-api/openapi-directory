import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a group of VM intances that can be identified as having all these labels, for example "env=prod and app=web".
 */
export declare class AssignmentGroupLabel extends SpeakeasyBase {
    /**
     * Google Compute Engine instance labels that must be present for an instance to be included in this assignment group.
     */
    labels?: Record<string, string>;
}
