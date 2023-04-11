import { SpeakeasyBase } from "../../../internal/utils";
/**
 * successful operation
 */
export declare class EventDetailSettings extends SpeakeasyBase {
    /**
     * The id of the application the settings are for
     */
    appId: number;
    /**
     * The url that will be used to fetch marketing event details by id
     */
    eventDetailsUrl: string;
}
