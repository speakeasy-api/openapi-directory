import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration of destination for Import related errors.
 */
export declare class GoogleCloudRecommendationengineV1beta1ImportErrorsConfig extends SpeakeasyBase {
    /**
     * Google Cloud Storage path for import errors. This must be an empty, existing Cloud Storage bucket. Import errors will be written to a file in this bucket, one per line, as a JSON-encoded `google.rpc.Status` message.
     */
    gcsPrefix?: string;
}
