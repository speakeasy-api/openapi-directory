import { SpeakeasyBase } from "../../../internal/utils";
import { GcsSource } from "./gcssource";
/**
 * Input configuration of a Document.
 */
export declare class DocumentInputConfig extends SpeakeasyBase {
    /**
     * The Google Cloud Storage location for the input content.
     */
    gcsSource?: GcsSource;
}
