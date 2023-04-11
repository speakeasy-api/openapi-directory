import { SpeakeasyBase } from "../../../internal/utils";
import { GcsDestination } from "./gcsdestination";
/**
 * Output configuration for BatchTranslateText request.
 */
export declare class OutputConfig extends SpeakeasyBase {
    /**
     * The Google Cloud Storage location for the output content.
     */
    gcsDestination?: GcsDestination;
}
