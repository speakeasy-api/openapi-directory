import { SpeakeasyBase } from "../../../internal/utils";
import { GcsSource } from "./gcssource";
/**
 * The input content
 */
export declare class InputConfig extends SpeakeasyBase {
    /**
     * The Cloud Storage location for the input content
     */
    gcsSource?: GcsSource;
}
