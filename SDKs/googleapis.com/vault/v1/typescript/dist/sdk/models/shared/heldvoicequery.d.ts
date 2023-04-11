import { SpeakeasyBase } from "../../../internal/utils";
export declare enum HeldVoiceQueryCoveredDataEnum {
    CoveredDataUnspecified = "COVERED_DATA_UNSPECIFIED",
    TextMessages = "TEXT_MESSAGES",
    Voicemails = "VOICEMAILS",
    CallLogs = "CALL_LOGS"
}
/**
 * Options for Voice holds.
 */
export declare class HeldVoiceQuery extends SpeakeasyBase {
    /**
     * A list of data types covered by the hold. Should be non-empty. Order does not matter and duplicates are ignored.
     */
    coveredData?: HeldVoiceQueryCoveredDataEnum[];
}
