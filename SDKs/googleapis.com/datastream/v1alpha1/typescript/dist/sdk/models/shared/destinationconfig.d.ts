import { SpeakeasyBase } from "../../../internal/utils";
import { GcsDestinationConfig } from "./gcsdestinationconfig";
/**
 * The configuration of the stream destination.
 */
export declare class DestinationConfig extends SpeakeasyBase {
    /**
     * Required. Destination connection profile identifier.
     */
    destinationConnectionProfileName?: string;
    /**
     * Google Cloud Storage destination configuration
     */
    gcsDestinationConfig?: GcsDestinationConfig;
}
