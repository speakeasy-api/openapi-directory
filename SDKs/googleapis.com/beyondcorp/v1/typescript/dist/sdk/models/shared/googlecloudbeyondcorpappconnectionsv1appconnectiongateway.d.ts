import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. The type of hosting used by the gateway.
 */
export declare enum GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    GcpRegionalMig = "GCP_REGIONAL_MIG"
}
/**
 * Gateway represents a user facing component that serves as an entrance to enable connectivity.
 */
export declare class GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGateway extends SpeakeasyBase {
    /**
     * Required. AppGateway name in following format: `projects/{project_id}/locations/{location_id}/appgateways/{gateway_id}`
     */
    appGateway?: string;
    /**
     * Output only. Ingress port reserved on the gateways for this AppConnection, if not specified or zero, the default port is 19443.
     */
    ingressPort?: number;
    /**
     * Output only. L7 private service connection for this resource.
     */
    l7psc?: string;
    /**
     * Required. The type of hosting used by the gateway.
     */
    type?: GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnum;
    /**
     * Output only. Server-defined URI for this resource.
     */
    uri?: string;
}
/**
 * Gateway represents a user facing component that serves as an entrance to enable connectivity.
 */
export declare class GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayInput extends SpeakeasyBase {
    /**
     * Required. AppGateway name in following format: `projects/{project_id}/locations/{location_id}/appgateways/{gateway_id}`
     */
    appGateway?: string;
    /**
     * Required. The type of hosting used by the gateway.
     */
    type?: GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnum;
}
