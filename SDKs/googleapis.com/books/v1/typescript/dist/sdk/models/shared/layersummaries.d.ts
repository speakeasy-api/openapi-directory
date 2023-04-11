import { SpeakeasyBase } from "../../../internal/utils";
import { Layersummary } from "./layersummary";
/**
 * Successful response
 */
export declare class Layersummaries extends SpeakeasyBase {
    /**
     * A list of layer summary items.
     */
    items?: Layersummary[];
    /**
     * Resource type.
     */
    kind?: string;
    /**
     * The total number of layer summaries found.
     */
    totalItems?: number;
}
