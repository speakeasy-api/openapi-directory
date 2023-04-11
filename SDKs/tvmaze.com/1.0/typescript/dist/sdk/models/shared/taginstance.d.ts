import { SpeakeasyBase } from "../../../internal/utils";
export declare class TagInstanceEmbedded extends SpeakeasyBase {
    show?: Record<string, any>;
}
/**
 * The show was tagged
 */
export declare class TagInstance extends SpeakeasyBase {
    embedded?: TagInstanceEmbedded;
    showId?: number;
}
