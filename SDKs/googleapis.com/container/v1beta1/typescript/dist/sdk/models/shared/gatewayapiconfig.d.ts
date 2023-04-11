import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Gateway API release channel to use for Gateway API.
 */
export declare enum GatewayAPIConfigChannelEnum {
    ChannelUnspecified = "CHANNEL_UNSPECIFIED",
    ChannelDisabled = "CHANNEL_DISABLED",
    ChannelExperimental = "CHANNEL_EXPERIMENTAL",
    ChannelStandard = "CHANNEL_STANDARD"
}
/**
 * GatewayAPIConfig contains the desired config of Gateway API on this cluster.
 */
export declare class GatewayAPIConfig extends SpeakeasyBase {
    /**
     * The Gateway API release channel to use for Gateway API.
     */
    channel?: GatewayAPIConfigChannelEnum;
}
