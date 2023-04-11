import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Optional. Indicates the user requested specifc connection type between Tenant and Customer projects. You cannot set networking connection type in public IP environment.
 */
export declare enum NetworkingConfigConnectionTypeEnum {
    ConnectionTypeUnspecified = "CONNECTION_TYPE_UNSPECIFIED",
    VpcPeering = "VPC_PEERING",
    PrivateServiceConnect = "PRIVATE_SERVICE_CONNECT"
}
/**
 * Configuration options for networking connections in the Composer 2 environment.
 */
export declare class NetworkingConfig extends SpeakeasyBase {
    /**
     * Optional. Indicates the user requested specifc connection type between Tenant and Customer projects. You cannot set networking connection type in public IP environment.
     */
    connectionType?: NetworkingConfigConnectionTypeEnum;
}
