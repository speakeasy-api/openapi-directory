import { SpeakeasyBase } from "../../../internal/utils";
import { GcsSource } from "./gcssource";
/**
 * Input configuration for BatchTranslateDocument request.
 */
export declare class BatchDocumentInputConfig extends SpeakeasyBase {
    /**
     * The Google Cloud Storage location for the input content.
     */
    gcsSource?: GcsSource;
}
