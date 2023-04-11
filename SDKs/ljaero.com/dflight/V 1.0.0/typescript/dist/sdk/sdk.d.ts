import { Aerodromes } from "./aerodromes";
import { Airspace } from "./airspace";
import { FlightRestrictions } from "./flightrestrictions";
import { RestrictedPublicVenues } from "./restrictedpublicvenues";
import { SpecialSecurityAreas } from "./specialsecurityareas";
import { SurfaceObstacles } from "./surfaceobstacles";
import { UASOperatingAreas } from "./uasoperatingareas";
import { Weather } from "./weather";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://dflight-api.ljaero.com/"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * [DFlight API](https://ljaero.com/solutions/dflight/) supplies the up-to-date information needed for compliance with UAV preflight assessment requirements. Separate endpoints are available for each of the following information categories:
 *
 * @remarks
 * - Airspace
 * - Weather
 * - Temporary Flight Restrictions
 * - Special Security Areas
 * - Restricted Public Venues
 * - Surface Obstacles
 * - Aerodromes
 * - UAS Operating Areas
 *
 * You can define your geographic area of interest in one of three convenient ways:
 * - Providing a latitude/longitude point and distance around that point
 * - Providing a GeoJSON LineString defining your route
 * - Providing an arbitrary GeoJSON Polygon defining your area of interest
 */
export declare class SDK {
    /**
     * #### Center points and contact information for all US landing facilities, including those with no associated controlled airspace:
     *
     * @remarks
     * * Public and private airports
     * * Public and private balloonports
     * * Public and private gliderports
     * * Public and private heliports
     * * Public and private seaplane bases
     * * Public and private ultralight bases
     */
    aerodromes: Aerodromes;
    /**
     * #### Information is available for the following types of airspace:
     *
     * @remarks
     * * **Controlled Airspace (CAS):** Class B, C, D, E2 airspace names, boundaries, altitude information, and LAANC availability
     * * **Special Use Airspace (SUA):** Names, boundaries, and altitude information for the following types of Special Use Airspace:
     *     - Alert Areas (AA)
     *     - Military Operations Areas (MOA)
     *     - National Security Areas (NSA)
     *     - Prohibited Areas (PA)
     *     - Restricted Areas (RA)
     *     - Warning Areas (WA)
     * * **Miscellaneous Activity Areas (MAA):** Names and boundary information for the following types of Miscellaneous Activity Areas:
     *     - Aerobatic Practice Areas (AEROBATIC PRACTICE)
     *     - Glider Operations Areas (GLIDER)
     *     - Hang Glider Operations Areas (HANG GLIDER)
     *     - Parachute Jump Areas (PARACHUTE JUMP AREA)
     *     - Space Launch Activity Areas (SPACE LAUNCH ACTIVITY)
     * * **Military Training Routes (MTR):** Names, route geometry, usage times, and corridor width information for both VFR and IFR Military Training Routes
     */
    airspace: Airspace;
    /**
     * #### Temporary Flight Restrictions (TFRs) define areas restricting air operations (including drone operations) due to hazardous conditions, special events, or other safety/security reasons.
     *
     * @remarks
     * All published/active TFRs in specified area will be included in the response. Check the startDateTime and endDateTime properties to determine whether or not the restriction is applicable during your planned time of operation. In case of a TFR in your area of intended operation, you might still be able to fly by obtaining a via waiver through the [Special Governmental Interest (SGI) process](https://www.faa.gov/uas/advanced_operations/emergency_situations).
     */
    flightRestrictions: FlightRestrictions;
    /**
     * #### Areas where drone operations may be restricted or prohibited:
     *
     * @remarks
     * * Lands administered by the National Park Service (prohibited at all times)
     * * Major League Baseball Stadiums (prohibited within a 3 NM radius 1 hr before - 1 hr after game)
     * * National Football League Stadiums (prohibited within a 3 NM radius 1 hr before - 1 hr after game)
     * * NCAA Division One Football Stadiums (prohibited within a 3 NM radius 1 hr before - 1 hr after game)
     * * NASCAR Sprint Cup, Indy Car, and Champ Series races (prohibited within a 3 NM radius 1 hr before - 1 hr after race)
     */
    restrictedPublicVenues: RestrictedPublicVenues;
    /**
     * #### Locations where all UAS flight operations are prohibited unless prior FAA authorization has been obtained, and coordination with the controlling agency has taken place.
     *
     * @remarks
     * Through agreements with the Department of Defense and other U.S. security and intelligence agencies, the FAA published these restrictions as [FDC NOTAM 1/0488](https://tfr.faa.gov/save_pages/detail_1_0488.html) (and it's predecessors). Unlike other NOTAMs designated as [Temporary Flight Restrictions](https://dflight-api.ljaero.com/#/Flight%20Restrictions), these remain in effect 24 hours a day, 7 days a week, until further announcement.
     */
    specialSecurityAreas: SpecialSecurityAreas;
    /**
     * #### All known structures whose presence might interfere with airborne activity, as defined in [14 CFR Part 77.9](https://www.ecfr.gov/current/title-14/chapter-I/subchapter-E/part-77#77.9).
     *
     * @remarks
     * This information is updated daily and includes the following details:
     * * Location
     * * Type
     * * Number of separate structures in case of a group
     * * Height (in ft. AGL)
     * * Lighting and other markings
     */
    surfaceObstacles: SurfaceObstacles;
    /**
     * #### Areas where drone activity is scheduled to take place.
     *
     * @remarks
     * UAS Operating Areas (UOAs) are published via [NOTAM](https://www.faa.gov/regulations_policies/orders_notices/index.cfm/go/document.information/documentID/1035053) to alert airspace users of unmanned aircraft activity in a given area and at a given time (singular or recurring).
     */
    uasOperatingAreas: UASOperatingAreas;
    /**
     * #### Hourly forecast values for the following flight-impacting weather elements:
     *
     * @remarks
     * * Cloud Ceiling (CIG)
     * * Dewpoint Temperature (DEWPT)
     * * Cloud Cover (SKY)
     * * Air Temperature (TEMP)
     * * Visibility (VIS)
     * * Wind Direction (WINDDIR)
     * * Wind Speed (WINDSPEED)
     * * Wind Gust Speed (WINDGUST)
     */
    weather: Weather;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
