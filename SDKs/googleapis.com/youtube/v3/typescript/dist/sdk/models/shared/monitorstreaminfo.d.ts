import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Settings and Info of the monitor stream
 */
export declare class MonitorStreamInfo extends SpeakeasyBase {
    /**
     * If you have set the enableMonitorStream property to true, then this property determines the length of the live broadcast delay.
     */
    broadcastStreamDelayMs?: number;
    /**
     * HTML code that embeds a player that plays the monitor stream.
     */
    embedHtml?: string;
    /**
     * This value determines whether the monitor stream is enabled for the broadcast. If the monitor stream is enabled, then YouTube will broadcast the event content on a special stream intended only for the broadcaster's consumption. The broadcaster can use the stream to review the event content and also to identify the optimal times to insert cuepoints. You need to set this value to true if you intend to have a broadcast delay for your event. *Note:* This property cannot be updated once the broadcast is in the testing or live state.
     */
    enableMonitorStream?: boolean;
}
