import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaCloudKmsConfig } from "./googlecloudintegrationsv1alphacloudkmsconfig";
/**
 * Request for the SwitchEncryption rpc
 */
export declare class GoogleCloudIntegrationsV1alphaSwitchEncryptionRequest extends SpeakeasyBase {
    /**
     * Configuration information for Client's Cloud KMS information
     */
    cloudKmsConfig?: GoogleCloudIntegrationsV1alphaCloudKmsConfig;
}
