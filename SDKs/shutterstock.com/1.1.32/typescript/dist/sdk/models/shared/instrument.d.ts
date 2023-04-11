import { SpeakeasyBase } from "../../../internal/utils";
import { Preview } from "./preview";
/**
 * Information about an musical instrument
 */
export declare class Instrument extends SpeakeasyBase {
    /**
     * The id of the instrument
     */
    id?: string;
    /**
     * Name of the instrument
     */
    name?: string;
    /**
     * Preview of the instrument
     */
    previews?: Preview[];
    /**
     * List of tags
     */
    tags?: string[];
}
