import { SpeakeasyBase } from "../../../internal/utils";
import { Finding } from "./finding";
import { Resource } from "./resource";
/**
 * State change of the finding between the points in time.
 */
export declare enum ListFindingsResultStateChangeEnum {
    Unused = "UNUSED",
    Changed = "CHANGED",
    Unchanged = "UNCHANGED",
    Added = "ADDED",
    Removed = "REMOVED"
}
/**
 * Result containing the Finding and its StateChange.
 */
export declare class ListFindingsResult extends SpeakeasyBase {
    /**
     * Security Command Center finding. A finding is a record of assessment data like security, risk, health, or privacy, that is ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement. For example, a cross-site scripting (XSS) vulnerability in an App Engine application is a finding.
     */
    finding?: Finding;
    /**
     * Information related to the Google Cloud resource that is associated with this finding.
     */
    resource?: Resource;
    /**
     * State change of the finding between the points in time.
     */
    stateChange?: ListFindingsResultStateChangeEnum;
}
