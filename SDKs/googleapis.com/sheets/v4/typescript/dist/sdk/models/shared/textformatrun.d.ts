import { SpeakeasyBase } from "../../../internal/utils";
import { TextFormat } from "./textformat";
/**
 * A run of a text format. The format of this run continues until the start index of the next run. When updating, all fields must be set.
 */
export declare class TextFormatRun extends SpeakeasyBase {
    /**
     * The format of a run of text in a cell. Absent values indicate that the field isn't specified.
     */
    format?: TextFormat;
    /**
     * The character index where this run starts.
     */
    startIndex?: number;
}
