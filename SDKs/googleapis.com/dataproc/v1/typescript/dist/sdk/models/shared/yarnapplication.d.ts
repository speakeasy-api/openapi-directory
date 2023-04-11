import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. The application state.
 */
export declare enum YarnApplicationStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    New = "NEW",
    NewSaving = "NEW_SAVING",
    Submitted = "SUBMITTED",
    Accepted = "ACCEPTED",
    Running = "RUNNING",
    Finished = "FINISHED",
    Failed = "FAILED",
    Killed = "KILLED"
}
/**
 * A YARN application created by a job. Application information is a subset of org.apache.hadoop.yarn.proto.YarnProtos.ApplicationReportProto.Beta Feature: This report is available for testing purposes only. It may be changed before final release.
 */
export declare class YarnApplication extends SpeakeasyBase {
    /**
     * Required. The application name.
     */
    name?: string;
    /**
     * Required. The numerical progress of the application, from 1 to 100.
     */
    progress?: number;
    /**
     * Required. The application state.
     */
    state?: YarnApplicationStateEnum;
    /**
     * Optional. The HTTP URL of the ApplicationMaster, HistoryServer, or TimelineServer that provides application-specific information. The URL uses the internal hostname, and requires a proxy server for resolution and, possibly, access.
     */
    trackingUrl?: string;
}
