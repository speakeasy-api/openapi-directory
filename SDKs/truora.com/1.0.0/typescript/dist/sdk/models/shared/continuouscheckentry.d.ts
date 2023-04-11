import { SpeakeasyBase } from "../../../internal/utils";
import { Change } from "./change";
/**
 * Represents to changelog entry of a continuous check
 */
export declare class ContinuousCheckEntry extends SpeakeasyBase {
    /**
     * Change list of background check scores
     */
    changes?: Change[];
    /**
     * Check ID
     */
    checkId?: string;
    /**
     * Continuous check ID
     */
    continuousCheckId?: string;
    /**
     * Continuous check creation date in RFC3339 format
     *
     * @remarks
     *
     */
    creationDate?: Date;
    /**
     * Previous check ID
     */
    previousCheckId?: string;
}
