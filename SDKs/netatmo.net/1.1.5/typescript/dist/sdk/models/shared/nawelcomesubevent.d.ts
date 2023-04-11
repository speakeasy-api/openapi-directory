import { SpeakeasyBase } from "../../../internal/utils";
import { NAWelcomeSnapshot } from "./nawelcomesnapshot";
/**
 * Type of the detected object.
 */
export declare enum NAWelcomeSubEventTypeEnum {
    Human = "human",
    Animal = "animal",
    Vehicle = "vehicle"
}
export declare class NAWelcomeSubEvent extends SpeakeasyBase {
    /**
     * Identifier of the sub event
     */
    id?: string;
    /**
     * User facing sub event description
     */
    message?: string;
    offset?: number;
    snapshot?: NAWelcomeSnapshot;
    /**
     * Time of occurence of the sub event
     */
    time?: number;
    /**
     * Type of the detected object.
     */
    type?: NAWelcomeSubEventTypeEnum;
}
