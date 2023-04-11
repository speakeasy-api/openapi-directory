import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Yara rule meta data section
 */
export declare class ApplyYaraRuleMatchedYaraRules extends SpeakeasyBase {
    /**
     * matched rule
     */
    rule: string;
    /**
     * string which matched during the scanning
     */
    stringInformation: string[];
}
export declare class ApplyYaraRule extends SpeakeasyBase {
    /**
     * error message, if YARA failed
     */
    errorMessage?: string;
    /**
     * is operation success
     */
    isSuccess: boolean;
    /**
     * matched YARA rules
     */
    matchedYaraRules?: ApplyYaraRuleMatchedYaraRules[][];
    /**
     * Yara command executed
     */
    yaraCommand: string;
}
