import { SpeakeasyBase } from "../../../internal/utils";
import { ConferenceSolutionKey } from "./conferencesolutionkey";
export declare class ConferenceSolution extends SpeakeasyBase {
    /**
     * The user-visible icon for this solution.
     */
    iconUri?: string;
    key?: ConferenceSolutionKey;
    /**
     * The user-visible name of this solution. Not localized.
     */
    name?: string;
}
