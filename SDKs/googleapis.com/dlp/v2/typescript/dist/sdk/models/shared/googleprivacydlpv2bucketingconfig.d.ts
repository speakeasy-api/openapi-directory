import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Bucket } from "./googleprivacydlpv2bucket";
/**
 * Generalization function that buckets values based on ranges. The ranges and replacement values are dynamically provided by the user for custom behavior, such as 1-30 -> LOW 31-65 -> MEDIUM 66-100 -> HIGH This can be used on data of type: number, long, string, timestamp. If the bound `Value` type differs from the type of data being transformed, we will first attempt converting the type of the data to be transformed to match the type of the bound before comparing. See https://cloud.google.com/dlp/docs/concepts-bucketing to learn more.
 */
export declare class GooglePrivacyDlpV2BucketingConfig extends SpeakeasyBase {
    /**
     * Set of buckets. Ranges must be non-overlapping.
     */
    buckets?: GooglePrivacyDlpV2Bucket[];
}
