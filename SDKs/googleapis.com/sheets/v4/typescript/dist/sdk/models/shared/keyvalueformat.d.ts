import { SpeakeasyBase } from "../../../internal/utils";
import { TextFormat } from "./textformat";
import { TextPosition } from "./textposition";
/**
 * Formatting options for key value.
 */
export declare class KeyValueFormat extends SpeakeasyBase {
    /**
     * Position settings for text.
     */
    position?: TextPosition;
    /**
     * The format of a run of text in a cell. Absent values indicate that the field isn't specified.
     */
    textFormat?: TextFormat;
}
