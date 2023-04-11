import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The platform of the test history. - In response: always set. Returns the platform of the last execution if unknown.
 */
export declare enum HistoryTestPlatformEnum {
    UnknownPlatform = "unknownPlatform",
    Android = "android",
    Ios = "ios"
}
/**
 * A History represents a sorted list of Executions ordered by the start_timestamp_millis field (descending). It can be used to group all the Executions of a continuous build. Note that the ordering only operates on one-dimension. If a repository has multiple branches, it means that multiple histories will need to be used in order to order Executions per branch.
 */
export declare class History extends SpeakeasyBase {
    /**
     * A short human-readable (plain text) name to display in the UI. Maximum of 100 characters. - In response: present if set during create. - In create request: optional
     */
    displayName?: string;
    /**
     * A unique identifier within a project for this History. Returns INVALID_ARGUMENT if this field is set or overwritten by the caller. - In response always set - In create request: never set
     */
    historyId?: string;
    /**
     * A name to uniquely identify a history within a project. Maximum of 200 characters. - In response always set - In create request: always set
     */
    name?: string;
    /**
     * The platform of the test history. - In response: always set. Returns the platform of the last execution if unknown.
     */
    testPlatform?: HistoryTestPlatformEnum;
}
