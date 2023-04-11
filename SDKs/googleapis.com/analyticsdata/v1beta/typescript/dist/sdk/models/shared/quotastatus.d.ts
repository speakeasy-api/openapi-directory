import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Current state for a particular quota group.
 */
export declare class QuotaStatus extends SpeakeasyBase {
    /**
     * Quota consumed by this request.
     */
    consumed?: number;
    /**
     * Quota remaining after this request.
     */
    remaining?: number;
}
