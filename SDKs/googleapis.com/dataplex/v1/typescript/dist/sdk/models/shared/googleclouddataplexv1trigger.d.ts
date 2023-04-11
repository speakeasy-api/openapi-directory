import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1TriggerSchedule } from "./googleclouddataplexv1triggerschedule";
/**
 * DataScan scheduling and trigger settings.
 */
export declare class GoogleCloudDataplexV1Trigger extends SpeakeasyBase {
    /**
     * The scan runs once via RunDataScan API.
     */
    onDemand?: Record<string, any>;
    /**
     * The scan is scheduled to run periodically.
     */
    schedule?: GoogleCloudDataplexV1TriggerSchedule;
}
