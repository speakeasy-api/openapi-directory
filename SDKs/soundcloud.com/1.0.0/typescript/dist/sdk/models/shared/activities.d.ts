import { SpeakeasyBase } from "../../../internal/utils";
export declare class ActivitiesCollection extends SpeakeasyBase {
    createdAt?: string;
    origin?: Record<string, any>;
    type?: string;
}
/**
 * User's activities.
**/
export declare class Activities extends SpeakeasyBase {
    collection?: ActivitiesCollection[];
    futureHref?: string;
    nextHref?: string;
}
