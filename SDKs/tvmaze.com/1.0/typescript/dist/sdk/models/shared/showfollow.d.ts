import { SpeakeasyBase } from "../../../internal/utils";
export declare class ShowFollowEmbedded extends SpeakeasyBase {
    show?: Record<string, any>;
}
/**
 * The followed show
 */
export declare class ShowFollow extends SpeakeasyBase {
    embedded?: ShowFollowEmbedded;
    showId?: number;
}
