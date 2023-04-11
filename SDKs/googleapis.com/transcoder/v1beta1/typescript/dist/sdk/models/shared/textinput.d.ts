import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Identifies which input file and track should be used.
 */
export declare class TextInput extends SpeakeasyBase {
    /**
     * Required. The `Input.key` that identifies the input file.
     */
    key?: string;
    /**
     * Required. The zero-based index of the track in the input file.
     */
    track?: number;
}
