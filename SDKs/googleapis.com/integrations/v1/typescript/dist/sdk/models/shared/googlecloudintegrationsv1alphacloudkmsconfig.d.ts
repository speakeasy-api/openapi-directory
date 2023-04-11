import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration information for Client's Cloud KMS information
 */
export declare class GoogleCloudIntegrationsV1alphaCloudKmsConfig extends SpeakeasyBase {
    /**
     * Required. A Cloud KMS key is a named object containing one or more key versions, along with metadata for the key. A key exists on exactly one key ring tied to a specific location.
     */
    key?: string;
    /**
     * Optional. Each version of a key contains key material used for encryption or signing. A key's version is represented by an integer, starting at 1. To decrypt data or verify a signature, you must use the same key version that was used to encrypt or sign the data.
     */
    keyVersion?: string;
    /**
     * Required. Location name of the key ring, e.g. "us-west1".
     */
    kmsLocation?: string;
    /**
     * Optional. The gcp project id of the project where the kms key stored. If empty, the kms key is stored at the same project as customer's project and ecrypted with CMEK, otherwise, the kms key is stored in the tenant project and encrypted with GMEK
     */
    kmsProjectId?: string;
    /**
     * Required. A key ring organizes keys in a specific Google Cloud location and allows you to manage access control on groups of keys. A key ring's name does not need to be unique across a Google Cloud project, but must be unique within a given location.
     */
    kmsRing?: string;
}
