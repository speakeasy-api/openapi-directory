import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Gateway is an API-aware HTTP proxy. It performs API-Method and/or API-Consumer specific actions based on an API Config such as authentication, policy enforcement, and backend selection.
 */
export declare class ApigatewayGatewayInput extends SpeakeasyBase {
    /**
     * Required. Resource name of the API Config for this Gateway. Format: projects/{project}/locations/global/apis/{api}/configs/{apiConfig}
     */
    apiConfig?: string;
    /**
     * Optional. Display name.
     */
    displayName?: string;
    /**
     * Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources
     */
    labels?: Record<string, string>;
}
/**
 * Output only. The current state of the Gateway.
 */
export declare enum ApigatewayGatewayStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    Failed = "FAILED",
    Deleting = "DELETING",
    Updating = "UPDATING"
}
/**
 * A Gateway is an API-aware HTTP proxy. It performs API-Method and/or API-Consumer specific actions based on an API Config such as authentication, policy enforcement, and backend selection.
 */
export declare class ApigatewayGateway extends SpeakeasyBase {
    /**
     * Required. Resource name of the API Config for this Gateway. Format: projects/{project}/locations/global/apis/{api}/configs/{apiConfig}
     */
    apiConfig?: string;
    /**
     * Output only. Created time.
     */
    createTime?: string;
    /**
     * Output only. The default API Gateway host name of the form `{gateway_id}-{hash}.{region_code}.gateway.dev`.
     */
    defaultHostname?: string;
    /**
     * Optional. Display name.
     */
    displayName?: string;
    /**
     * Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources
     */
    labels?: Record<string, string>;
    /**
     * Output only. Resource name of the Gateway. Format: projects/{project}/locations/{location}/gateways/{gateway}
     */
    name?: string;
    /**
     * Output only. The current state of the Gateway.
     */
    state?: ApigatewayGatewayStateEnum;
    /**
     * Output only. Updated time.
     */
    updateTime?: string;
}
