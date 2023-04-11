import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaCloudKmsConfig } from "./googlecloudintegrationsv1alphacloudkmsconfig";
import { GoogleCloudIntegrationsV1alphaCloudLoggingConfig } from "./googlecloudintegrationsv1alphacloudloggingconfig";
/**
 * Indicates the billing type of the client
 */
export declare enum GoogleCloudIntegrationsV1alphaClientConfigBillingTypeEnum {
    BillingTypeUnspecified = "BILLING_TYPE_UNSPECIFIED",
    BillingTypeApigeeTrials = "BILLING_TYPE_APIGEE_TRIALS",
    BillingTypeApigeeSubscription = "BILLING_TYPE_APIGEE_SUBSCRIPTION",
    BillingTypePayg = "BILLING_TYPE_PAYG"
}
/**
 * Indicates the activity state the client
 */
export declare enum GoogleCloudIntegrationsV1alphaClientConfigClientStateEnum {
    ClientStateUnspecified = "CLIENT_STATE_UNSPECIFIED",
    ClientStateActive = "CLIENT_STATE_ACTIVE",
    ClientStateDisabled = "CLIENT_STATE_DISABLED"
}
/**
 * The configuration information for the Client
 */
export declare class GoogleCloudIntegrationsV1alphaClientConfig extends SpeakeasyBase {
    /**
     * Indicates the billing type of the client
     */
    billingType?: GoogleCloudIntegrationsV1alphaClientConfigBillingTypeEnum;
    /**
     * Indicates the activity state the client
     */
    clientState?: GoogleCloudIntegrationsV1alphaClientConfigClientStateEnum;
    /**
     * Configuration information for Client's Cloud KMS information
     */
    cloudKmsConfig?: GoogleCloudIntegrationsV1alphaCloudKmsConfig;
    /**
     * Config info for Cloud Logging
     */
    cloudLoggingConfig?: GoogleCloudIntegrationsV1alphaCloudLoggingConfig;
    /**
     * The timestamp when the client was first created.
     */
    createTime?: string;
    /**
     * Description of what the client is used for
     */
    description?: string;
    /**
     * Globally unique ID (project_id + region)
     */
    id?: string;
    /**
     * The P4SA account associated with this client
     */
    p4ServiceAccount?: string;
    /**
     * The GCP project id of the client associated with
     */
    projectId?: string;
    /**
     * The region the client is linked to.
     */
    region?: string;
}
