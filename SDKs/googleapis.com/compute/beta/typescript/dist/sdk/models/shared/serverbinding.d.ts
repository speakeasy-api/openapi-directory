import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ServerBindingTypeEnum {
    RestartNodeOnAnyServer = "RESTART_NODE_ON_ANY_SERVER",
    RestartNodeOnMinimalServers = "RESTART_NODE_ON_MINIMAL_SERVERS",
    ServerBindingTypeUnspecified = "SERVER_BINDING_TYPE_UNSPECIFIED"
}
export declare class ServerBinding extends SpeakeasyBase {
    type?: ServerBindingTypeEnum;
}
