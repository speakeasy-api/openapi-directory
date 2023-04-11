import { SpeakeasyBase } from "../../../internal/utils";
import { Source } from "./source";
/**
 * Information about a side input of a DoFn or an input of a SeqDoFn.
 */
export declare class SideInputInfo extends SpeakeasyBase {
    /**
     * How to interpret the source element(s) as a side input value.
     */
    kind?: Record<string, any>;
    /**
     * The source(s) to read element(s) from to get the value of this side input. If more than one source, then the elements are taken from the sources, in the specified order if order matters. At least one source is required.
     */
    sources?: Source[];
    /**
     * The id of the tag the user code will access this side input by; this should correspond to the tag of some MultiOutputInfo.
     */
    tag?: string;
}
