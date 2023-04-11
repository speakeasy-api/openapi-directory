import { SpeakeasyBase } from "../../../internal/utils";
import { GcsDestination } from "./gcsdestination";
/**
 * Output configuration for BatchTranslateDocument request.
 */
export declare class BatchDocumentOutputConfig extends SpeakeasyBase {
    /**
     * The Google Cloud Storage location for the output content.
     */
    gcsDestination?: GcsDestination;
}
