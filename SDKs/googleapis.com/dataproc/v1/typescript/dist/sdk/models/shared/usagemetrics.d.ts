import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Usage metrics represent approximate total resources consumed by a workload.
 */
export declare class UsageMetrics extends SpeakeasyBase {
    /**
     * Optional. DCU (Dataproc Compute Units) usage in (milliDCU x seconds) (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)).
     */
    milliDcuSeconds?: string;
    /**
     * Optional. Shuffle storage usage in (GB x seconds) (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)).
     */
    shuffleStorageGbSeconds?: string;
}
