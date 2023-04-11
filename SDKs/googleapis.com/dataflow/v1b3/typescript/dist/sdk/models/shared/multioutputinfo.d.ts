import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about an output of a multi-output DoFn.
 */
export declare class MultiOutputInfo extends SpeakeasyBase {
    /**
     * The id of the tag the user code will emit to this output by; this should correspond to the tag of some SideInputInfo.
     */
    tag?: string;
}
