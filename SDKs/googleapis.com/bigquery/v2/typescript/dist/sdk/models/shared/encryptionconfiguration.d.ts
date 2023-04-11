import { SpeakeasyBase } from "../../../internal/utils";
export declare class EncryptionConfiguration extends SpeakeasyBase {
    /**
     * [Optional] Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. The BigQuery Service Account associated with your project requires access to this encryption key.
     */
    kmsKeyName?: string;
}
