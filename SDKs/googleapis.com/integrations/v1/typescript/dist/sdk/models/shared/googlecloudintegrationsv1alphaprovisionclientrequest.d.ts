import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaCloudKmsConfig } from "./googlecloudintegrationsv1alphacloudkmsconfig";
/**
 * Request for the Provision rpc
 */
export declare class GoogleCloudIntegrationsV1alphaProvisionClientRequest extends SpeakeasyBase {
    /**
     * Configuration information for Client's Cloud KMS information
     */
    cloudKmsConfig?: GoogleCloudIntegrationsV1alphaCloudKmsConfig;
    /**
     * Optional. Indicates if sample workflow should be created along with provisioning
     */
    createSampleWorkflows?: boolean;
    /**
     * Optional. Indicates provision with GMEK or CMEK
     */
    provisionGmek?: boolean;
}
