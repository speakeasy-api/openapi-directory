import { SpeakeasyBase } from "../../../internal/utils";
import { GcsSource } from "./gcssource";
/**
 * Input configuration for glossaries.
 */
export declare class GlossaryInputConfig extends SpeakeasyBase {
    /**
     * The Google Cloud Storage location for the input content.
     */
    gcsSource?: GcsSource;
}
