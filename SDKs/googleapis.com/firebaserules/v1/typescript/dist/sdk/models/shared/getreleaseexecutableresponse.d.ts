import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Rules runtime version of the executable.
 */
export declare enum GetReleaseExecutableResponseExecutableVersionEnum {
    ReleaseExecutableVersionUnspecified = "RELEASE_EXECUTABLE_VERSION_UNSPECIFIED",
    FirebaseRulesExecutableV1 = "FIREBASE_RULES_EXECUTABLE_V1",
    FirebaseRulesExecutableV2 = "FIREBASE_RULES_EXECUTABLE_V2"
}
/**
 * `Language` used to generate the executable bytes.
 */
export declare enum GetReleaseExecutableResponseLanguageEnum {
    LanguageUnspecified = "LANGUAGE_UNSPECIFIED",
    FirebaseRules = "FIREBASE_RULES",
    EventFlowTriggers = "EVENT_FLOW_TRIGGERS"
}
/**
 * The response for FirebaseRulesService.GetReleaseExecutable
 */
export declare class GetReleaseExecutableResponse extends SpeakeasyBase {
    /**
     * Executable view of the `Ruleset` referenced by the `Release`.
     */
    executable?: string;
    /**
     * The Rules runtime version of the executable.
     */
    executableVersion?: GetReleaseExecutableResponseExecutableVersionEnum;
    /**
     * `Language` used to generate the executable bytes.
     */
    language?: GetReleaseExecutableResponseLanguageEnum;
    /**
     * `Ruleset` name associated with the `Release` executable.
     */
    rulesetName?: string;
    /**
     * Optional, indicates the freshness of the result. The response is guaranteed to be the latest within an interval up to the sync_time (inclusive).
     */
    syncTime?: string;
    /**
     * Timestamp for the most recent `Release.update_time`.
     */
    updateTime?: string;
}
