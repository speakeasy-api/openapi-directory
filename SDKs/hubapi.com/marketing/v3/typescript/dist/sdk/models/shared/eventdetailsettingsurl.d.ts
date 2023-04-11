import { SpeakeasyBase } from "../../../internal/utils";
export declare class EventDetailSettingsUrl extends SpeakeasyBase {
    /**
     * The url that will be used to fetch marketing event details by id. Must contain a `%s` character sequence that will be substituted with the event id. For example: `https://my.event.app/events/%s`
     */
    eventDetailsUrl: string;
}
