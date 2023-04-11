import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines the context of the ping.
 */
export declare enum ChannelConversionPingContextEnum {
    Subscribe = "subscribe",
    Unsubscribe = "unsubscribe",
    Cview = "cview"
}
/**
 * Pings that the app shall fire (authenticated by biscotti cookie). Each ping has a context, in which the app must fire the ping, and a url identifying the ping.
 */
export declare class ChannelConversionPing extends SpeakeasyBase {
    /**
     * Defines the context of the ping.
     */
    context?: ChannelConversionPingContextEnum;
    /**
     * The url (without the schema) that the player shall send the ping to. It's at caller's descretion to decide which schema to use (http vs https) Example of a returned url: //googleads.g.doubleclick.net/pagead/ viewthroughconversion/962985656/?data=path%3DtHe_path%3Btype%3D cview%3Butuid%3DGISQtTNGYqaYl4sKxoVvKA&labe=default The caller must append biscotti authentication (ms param in case of mobile, for example) to this ping.
     */
    conversionUrl?: string;
}
