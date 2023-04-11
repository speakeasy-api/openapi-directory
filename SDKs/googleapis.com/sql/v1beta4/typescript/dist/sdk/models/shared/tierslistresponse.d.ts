import { SpeakeasyBase } from "../../../internal/utils";
import { Tier } from "./tier";
/**
 * Tiers list response.
 */
export declare class TiersListResponse extends SpeakeasyBase {
    /**
     * List of tiers.
     */
    items?: Tier[];
    /**
     * This is always `sql#tiersList`.
     */
    kind?: string;
}
