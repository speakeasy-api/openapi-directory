import { SpeakeasyBase } from "../../../internal/utils";
import { Activity } from "./activity";
/**
 * This represents a user session performed on a specific device at a certain time over a period of time.
 */
export declare class UserActivitySession extends SpeakeasyBase {
    /**
     * Represents a detailed view into each of the activity in this session.
     */
    activities?: Activity[];
    /**
     * The data source of a hit. By default, hits sent from analytics.js are reported as "web" and hits sent from the mobile SDKs are reported as "app". These values can be overridden in the Measurement Protocol.
     */
    dataSource?: string;
    /**
     * The type of device used: "mobile", "tablet" etc.
     */
    deviceCategory?: string;
    /**
     * Platform on which the activity happened: "android", "ios" etc.
     */
    platform?: string;
    /**
     * Date of this session in ISO-8601 format.
     */
    sessionDate?: string;
    /**
     * Unique ID of the session.
     */
    sessionId?: string;
}
