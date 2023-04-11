import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The usage snaphot represents the resources consumed by a workload at a specified time.
 */
export declare class UsageSnapshot extends SpeakeasyBase {
    /**
     * Optional. Milli (one-thousandth) Dataproc Compute Units (DCUs) (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)).
     */
    milliDcu?: string;
    /**
     * Optional. Shuffle Storage in gigabytes (GB). (see Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing))
     */
    shuffleStorageGb?: string;
    /**
     * Optional. The timestamp of the usage snapshot.
     */
    snapshotTime?: string;
}
