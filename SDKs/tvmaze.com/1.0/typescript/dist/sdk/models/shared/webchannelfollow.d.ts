import { SpeakeasyBase } from "../../../internal/utils";
export declare class WebchannelFollowEmbedded extends SpeakeasyBase {
    webchannel?: Record<string, any>;
}
/**
 * The followed webchannel
 */
export declare class WebchannelFollow extends SpeakeasyBase {
    embedded?: WebchannelFollowEmbedded;
    webchannelId?: number;
}
