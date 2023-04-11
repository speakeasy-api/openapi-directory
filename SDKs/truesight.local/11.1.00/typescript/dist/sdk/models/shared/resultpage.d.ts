import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Encapsulates a list of results.
 */
export declare class ResultPage extends SpeakeasyBase {
    /**
     * The list of currently accessible results.
     */
    items?: Record<string, any>[];
    /**
     * If <em>true</em>, indicates that you are denied access to part of, or all the results.
     */
    restrictedRights?: boolean;
    /**
     * The total number of accessible results, including the results not listed in <em>items</em>.
     */
    total?: number;
}
