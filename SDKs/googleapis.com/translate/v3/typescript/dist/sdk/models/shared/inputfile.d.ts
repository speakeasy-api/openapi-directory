import { SpeakeasyBase } from "../../../internal/utils";
import { GcsInputSource } from "./gcsinputsource";
/**
 * An input file.
 */
export declare class InputFile extends SpeakeasyBase {
    /**
     * The Google Cloud Storage location for the input content.
     */
    gcsSource?: GcsInputSource;
    /**
     * Optional. Usage of the file contents. Options are TRAIN|VALIDATION|TEST, or UNASSIGNED (by default) for auto split.
     */
    usage?: string;
}
