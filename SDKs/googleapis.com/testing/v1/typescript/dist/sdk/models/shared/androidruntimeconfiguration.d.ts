import { SpeakeasyBase } from "../../../internal/utils";
import { Locale } from "./locale";
import { Orientation } from "./orientation";
/**
 * Android configuration that can be selected at the time a test is run.
 */
export declare class AndroidRuntimeConfiguration extends SpeakeasyBase {
    /**
     * The set of available locales.
     */
    locales?: Locale[];
    /**
     * The set of available orientations.
     */
    orientations?: Orientation[];
}
