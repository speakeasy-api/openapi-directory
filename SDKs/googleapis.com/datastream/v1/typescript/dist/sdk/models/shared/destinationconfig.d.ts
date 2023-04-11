import { SpeakeasyBase } from "../../../internal/utils";
import { BigQueryDestinationConfig } from "./bigquerydestinationconfig";
import { GcsDestinationConfig } from "./gcsdestinationconfig";
/**
 * The configuration of the stream destination.
 */
export declare class DestinationConfig extends SpeakeasyBase {
    /**
     * BigQuery destination configuration
     */
    bigqueryDestinationConfig?: BigQueryDestinationConfig;
    /**
     * Required. Destination connection profile resource. Format: `projects/{project}/locations/{location}/connectionProfiles/{name}`
     */
    destinationConnectionProfile?: string;
    /**
     * Google Cloud Storage destination configuration
     */
    gcsDestinationConfig?: GcsDestinationConfig;
}
