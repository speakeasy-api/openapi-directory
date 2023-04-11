import { SpeakeasyBase } from "../../../internal/utils";
import { MemoryHashSignature } from "./memoryhashsignature";
import { YaraRuleSignature } from "./yararulesignature";
/**
 * Indicates what signature matched this process.
 */
export declare class ProcessSignature extends SpeakeasyBase {
    /**
     * A signature corresponding to memory page hashes.
     */
    memoryHashSignature?: MemoryHashSignature;
    /**
     * A signature corresponding to a YARA rule.
     */
    yaraRuleSignature?: YaraRuleSignature;
}
