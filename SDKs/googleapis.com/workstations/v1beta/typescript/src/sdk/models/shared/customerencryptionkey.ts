/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * A customer-managed encryption key for the Compute Engine resources of this workstation configuration.
 */
export class CustomerEncryptionKey extends SpeakeasyBase {
  /**
   * The name of the Google Cloud KMS encryption key. For example, `projects/PROJECT_ID/locations/REGION/keyRings/KEY_RING/cryptoKeys/KEY_NAME`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "kmsKey" })
  kmsKey?: string;

  /**
   * The service account to use with the specified KMS key. We recommend that you use a separate service account and follow KMS best practices. For more information, see [Separation of duties](https://cloud.google.com/kms/docs/separation-of-duties) and `gcloud kms keys add-iam-policy-binding` [`--member`](https://cloud.google.com/sdk/gcloud/reference/kms/keys/add-iam-policy-binding#--member).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "kmsKeyServiceAccount" })
  kmsKeyServiceAccount?: string;
}
