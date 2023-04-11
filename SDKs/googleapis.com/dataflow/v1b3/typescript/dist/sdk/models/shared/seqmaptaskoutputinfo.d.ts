import { SpeakeasyBase } from "../../../internal/utils";
import { Sink } from "./sink";
/**
 * Information about an output of a SeqMapTask.
 */
export declare class SeqMapTaskOutputInfo extends SpeakeasyBase {
    /**
     * A sink that records can be encoded and written to.
     */
    sink?: Sink;
    /**
     * The id of the TupleTag the user code will tag the output value by.
     */
    tag?: string;
}
