import { SpeakeasyBase } from "../../../internal/utils";
import { Source } from "./source";
/**
 * An instruction that reads records. Takes no inputs, produces one output.
 */
export declare class ReadInstruction extends SpeakeasyBase {
    /**
     * A source that records can be read and decoded from.
     */
    source?: Source;
}
