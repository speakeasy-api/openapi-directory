import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The encryption options for the Cloud Composer environment and its dependencies.Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
 */
export declare class EncryptionConfig extends SpeakeasyBase {
    /**
     * Optional. Customer-managed Encryption Key available through Google's Key Management Service. Cannot be updated. If not specified, Google-managed key will be used.
     */
    kmsKeyName?: string;
}
