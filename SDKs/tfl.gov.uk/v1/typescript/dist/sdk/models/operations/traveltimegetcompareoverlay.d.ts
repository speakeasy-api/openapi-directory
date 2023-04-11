import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The direction of travel.
 */
export declare enum TravelTimeGetCompareOverlayDirectionEnum {
    Average = "Average",
    From = "From",
    To = "To"
}
export declare class TravelTimeGetCompareOverlayRequest extends SpeakeasyBase {
    compareType: string;
    compareValue: string;
    /**
     * The direction of travel.
     */
    direction: TravelTimeGetCompareOverlayDirectionEnum;
    /**
     * The height of the requested overlay.
     */
    height: number;
    /**
     * The map center latitude.
     */
    mapCenterLat: number;
    /**
     * The map center longitude.
     */
    mapCenterLon: number;
    /**
     * The id of the mode.
     */
    modeId: string;
    /**
     * The latitude of the pin.
     */
    pinLat: number;
    /**
     * The longitude of the pin.
     */
    pinLon: number;
    /**
     * The title of the scenario.
     */
    scenarioTitle: string;
    /**
     * The id for the time of day (AM/INTER/PM)
     */
    timeOfDayId: string;
    /**
     * The total minutes between the travel time bands
     */
    travelTimeInterval: number;
    /**
     * The width of the requested overlay.
     */
    width: number;
    /**
     * The zoom level.
     */
    z: number;
}
export declare class TravelTimeGetCompareOverlayResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    systemObject?: Record<string, any>;
}
