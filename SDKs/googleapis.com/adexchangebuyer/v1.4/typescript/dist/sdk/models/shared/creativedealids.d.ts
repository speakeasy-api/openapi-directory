import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreativeDealIdsDealStatuses extends SpeakeasyBase {
    /**
     * ARC approval status.
     */
    arcStatus?: string;
    /**
     * External deal ID.
     */
    dealId?: string;
    /**
     * Publisher ID.
     */
    webPropertyId?: number;
}
/**
 * The external deal ids associated with a creative.
 */
export declare class CreativeDealIds extends SpeakeasyBase {
    /**
     * A list of external deal ids and ARC approval status.
     */
    dealStatuses?: CreativeDealIdsDealStatuses[];
    /**
     * Resource type.
     */
    kind?: string;
}
