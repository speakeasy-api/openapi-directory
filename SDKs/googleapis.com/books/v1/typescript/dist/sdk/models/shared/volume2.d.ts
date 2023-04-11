import { SpeakeasyBase } from "../../../internal/utils";
import { Volume } from "./volume";
/**
 * Successful response
 */
export declare class Volume2 extends SpeakeasyBase {
    /**
     * A list of volumes.
     */
    items?: Volume[];
    /**
     * Resource type.
     */
    kind?: string;
    nextPageToken?: string;
}
