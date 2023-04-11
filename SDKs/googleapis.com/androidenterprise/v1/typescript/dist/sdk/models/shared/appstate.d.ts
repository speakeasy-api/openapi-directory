import { SpeakeasyBase } from "../../../internal/utils";
import { KeyedAppState } from "./keyedappstate";
/**
 * List of states set by the app.
 */
export declare class AppState extends SpeakeasyBase {
    /**
     * List of keyed app states. This field will always be present.
     */
    keyedAppState?: KeyedAppState[];
    /**
     * The package name of the app. This field will always be present.
     */
    packageName?: string;
}
