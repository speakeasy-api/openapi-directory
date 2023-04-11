import { SpeakeasyBase } from "../../../internal/utils";
import { NAWelcomeSnapshot } from "./nawelcomesnapshot";
import { NAWelcomeSubEvent } from "./nawelcomesubevent";
/**
 * Type of the detected object.
 */
export declare enum NAWelcomeEventCategoryEnum {
    Human = "human",
    Animal = "animal",
    Vehicle = "vehicle"
}
export declare class NAWelcomeEvent extends SpeakeasyBase {
    /**
     * Camera that detected the event
     */
    cameraId?: string;
    /**
     * Type of the detected object.
     */
    category?: NAWelcomeEventCategoryEnum;
    eventList?: NAWelcomeSubEvent[];
    /**
     * Identifier of the event
     */
    id?: string;
    /**
     * If person was considered away before being seen during this event
     */
    isArrival?: boolean;
    /**
     * User facing event description
     */
    message?: string;
    /**
     * Id of the person the event is about (if any)
     */
    personId?: string;
    snapshot?: NAWelcomeSnapshot;
    /**
     * Subtypes of SD and Alim events. Go to Welcome page for further details.
     */
    subType?: number;
    /**
     * Time of occurence of event
     */
    time?: number;
    /**
     * Type of events. Go to the Welcome page for further details.
     */
    type?: string;
    /**
     * Identifier of the video
     */
    videoId?: string;
    /**
     * Status of the video (recording, deleted or available)
     */
    videoStatus?: string;
}
