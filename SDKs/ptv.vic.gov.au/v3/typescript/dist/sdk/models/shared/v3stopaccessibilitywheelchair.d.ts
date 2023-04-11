import { SpeakeasyBase } from "../../../internal/utils";
export declare class V3StopAccessibilityWheelchair extends SpeakeasyBase {
    accessibleRamp?: boolean;
    /**
     * Indicates if there is at least one low ticket counter at the stop that complies with the Disability Standards for Accessible Public Transport under the Disability Discrimination Act (1992)
     */
    lowTicketCounter?: boolean;
    /**
     * Indicates if there is a space for mobility device to board on or off a transport mode
     */
    manouvering?: boolean;
    /**
     * Indicates if there is at least one accessible parking spot at the stop that complies with the Disability Standards for Accessible Public Transport under the Disability Discrimination Act (1992)
     */
    parking?: boolean;
    /**
     * Indicates if there is a raised platform to board a train
     */
    raisedPlatform?: boolean;
    /**
     * Indicates if there is shelter near the raised platform
     */
    raisedPlatformShelther?: boolean;
    /**
     * Indicates if there are ramps (&lt;1:14) at the stop/platform
     */
    ramp?: boolean;
    /**
     * Indicates if there is a path beyond the stop which is accessible
     */
    secondaryPath?: boolean;
    /**
     * Indicates if there are ramps (&gt;1:14) at the stop/platform
     */
    steepRamp?: boolean;
    /**
     * Indicates if there is at least one accessible telephone at the stop/platform that complies with the Disability Standards for Accessible Public Transport under the Disability Discrimination Act (1992)
     */
    telephone?: boolean;
    /**
     * Indicates if there is at least one accessible toilet at the stop/platform that complies with the Disability Standards for Accessible Public Transport under the Disability Discrimination Act (1992)
     */
    toilet?: boolean;
}
