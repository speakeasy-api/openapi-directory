import { SpeakeasyBase } from "../../../internal/utils";
import { Flag } from "./flag";
/**
 * Flags list response.
 */
export declare class FlagsListResponse extends SpeakeasyBase {
    /**
     * List of flags.
     */
    items?: Flag[];
    /**
     * This is always `sql#flagsList`.
     */
    kind?: string;
}
