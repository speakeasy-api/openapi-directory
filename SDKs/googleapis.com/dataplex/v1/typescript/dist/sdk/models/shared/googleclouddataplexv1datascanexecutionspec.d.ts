import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1Trigger } from "./googleclouddataplexv1trigger";
/**
 * DataScan execution settings.
 */
export declare class GoogleCloudDataplexV1DataScanExecutionSpec extends SpeakeasyBase {
    /**
     * Immutable. The unnested field (of type Date or Timestamp) that contains values which monotonically increase over time.If not specified, a data scan will run for all data in the table.
     */
    field?: string;
    /**
     * DataScan scheduling and trigger settings.
     */
    trigger?: GoogleCloudDataplexV1Trigger;
}
