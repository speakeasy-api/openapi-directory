import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The class defines the public visibility period on the Discovery/Publish API.
 */
export declare class PublicVisibility extends SpeakeasyBase {
    /**
     * The end of the public visibility. The date and time when the event will be public visible
     */
    endDateTime?: Date;
    /**
     * The start of the public visibility. The date and time when the event will be public visible
     */
    startDateTime?: Date;
    /**
     * True if you want to have the event visible in the discovery API
     */
    visible?: boolean;
}
