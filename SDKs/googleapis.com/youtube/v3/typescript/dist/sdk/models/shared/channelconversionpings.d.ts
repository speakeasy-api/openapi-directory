import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelConversionPing } from "./channelconversionping";
/**
 * The conversionPings object encapsulates information about conversion pings that need to be respected by the channel.
 */
export declare class ChannelConversionPings extends SpeakeasyBase {
    /**
     * Pings that the app shall fire (authenticated by biscotti cookie). Each ping has a context, in which the app must fire the ping, and a url identifying the ping.
     */
    pings?: ChannelConversionPing[];
}
