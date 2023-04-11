import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Free wifi exception.
 */
export declare enum ConnectivityFreeWifiExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Public area wifi available exception.
 */
export declare enum ConnectivityPublicAreaWifiAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Public internet terminal exception.
 */
export declare enum ConnectivityPublicInternetTerminalExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Wifi available exception.
 */
export declare enum ConnectivityWifiAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * The ways in which the property provides guests with the ability to access the internet.
 */
export declare class Connectivity extends SpeakeasyBase {
    /**
     * Free wifi. The hotel offers guests wifi for free.
     */
    freeWifi?: boolean;
    /**
     * Free wifi exception.
     */
    freeWifiException?: ConnectivityFreeWifiExceptionEnum;
    /**
     * Public area wifi available. Guests have the ability to wirelessly connect to the internet in the areas of the hotel accessible to anyone. Can be free or for a fee.
     */
    publicAreaWifiAvailable?: boolean;
    /**
     * Public area wifi available exception.
     */
    publicAreaWifiAvailableException?: ConnectivityPublicAreaWifiAvailableExceptionEnum;
    /**
     * Public internet terminal. An area of the hotel supplied with computers and designated for the purpose of providing guests with the ability to access the internet.
     */
    publicInternetTerminal?: boolean;
    /**
     * Public internet terminal exception.
     */
    publicInternetTerminalException?: ConnectivityPublicInternetTerminalExceptionEnum;
    /**
     * Wifi available. The hotel provides the ability for guests to wirelessly connect to the internet. Can be in the public areas of the hotel and/or in the guest rooms. Can be free or for a fee.
     */
    wifiAvailable?: boolean;
    /**
     * Wifi available exception.
     */
    wifiAvailableException?: ConnectivityWifiAvailableExceptionEnum;
}
