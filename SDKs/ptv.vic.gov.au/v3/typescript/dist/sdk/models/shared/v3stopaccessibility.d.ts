import { SpeakeasyBase } from "../../../internal/utils";
import { V3StopAccessibilityWheelchair } from "./v3stopaccessibilitywheelchair";
export declare class V3StopAccessibility extends SpeakeasyBase {
    /**
     * Indicates if there is at least one audio customer information at the stop/platform
     */
    audioCustomerInformation?: boolean;
    /**
     * Indicates if there is at least one accessible escalator at the stop/platform that complies with the Disability Standards for Accessible Public Transport under the Disability Discrimination Act (1992)
     */
    escalator?: boolean;
    /**
     * Indicates if there is a hearing loop facility at the stop/platform
     */
    hearingLoop?: boolean;
    /**
     * Indicates if there is an elevator at the stop/platform
     */
    lift?: boolean;
    /**
     * Indicates if there is lighting at the stop
     */
    lighting?: boolean;
    /**
     * Indicates the platform number for xivic information (Platform 0 indicates general stop facilities)
     */
    platformNumber?: number;
    /**
     * Indicates if there are stairs available in the stop
     */
    stairs?: boolean;
    /**
     * Indicates if the stop is accessible
     */
    stopAccessible?: boolean;
    /**
     * Indicates if there are tactile tiles (also known as tactile ground surface indicators, or TGSIs) at the stop
     */
    tactileGroundSurfaceIndicator?: boolean;
    /**
     * Indicates if there is a general waiting area at the stop
     */
    waitingRoom?: boolean;
    wheelchair?: V3StopAccessibilityWheelchair;
}
