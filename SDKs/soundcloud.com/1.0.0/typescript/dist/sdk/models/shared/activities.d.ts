import { SpeakeasyBase } from "../../../internal/utils";
export declare class ActivitiesCollection extends SpeakeasyBase {
    /**
     * Created timestamp.
     */
    createdAt?: string;
    /**
     * Origin.
     */
    origin?: any;
    /**
     * Type of activity (track).
     */
    type?: string;
}
/**
 * User's activities.
 */
export declare class Activities extends SpeakeasyBase {
    collection?: ActivitiesCollection[];
    futureHref?: string;
    nextHref?: string;
}
