import { SpeakeasyBase } from "../../../internal/utils";
import { Volume } from "./volume";
/**
 * Successful response
 */
export declare class Volumes extends SpeakeasyBase {
    /**
     * A list of volumes.
     */
    items?: Volume[];
    /**
     * Resource type.
     */
    kind?: string;
    /**
     * Total number of volumes found. This might be greater than the number of volumes returned in this response if results have been paginated.
     */
    totalItems?: number;
}
