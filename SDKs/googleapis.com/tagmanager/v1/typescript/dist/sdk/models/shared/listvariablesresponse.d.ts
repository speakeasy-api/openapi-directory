import { SpeakeasyBase } from "../../../internal/utils";
import { Variable } from "./variable";
/**
 * List Variables Response.
 */
export declare class ListVariablesResponse extends SpeakeasyBase {
    /**
     * All GTM Variables of a GTM Container.
     */
    variables?: Variable[];
}
