import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ReferenceData {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Aircraft
     *
     * @remarks
     * List all aircraft types or one specific aircraft type.
     */
    referencesAircraftByAircraftCodeGet(req: operations.ReferencesAircraftByAircraftCodeGetRequest, security: operations.ReferencesAircraftByAircraftCodeGetSecurity, config?: AxiosRequestConfig): Promise<operations.ReferencesAircraftByAircraftCodeGetResponse>;
    /**
     * Airlines
     *
     * @remarks
     * List all airlines or one specific airline.
     */
    referencesAirlinesByAirlineCodeGet(req: operations.ReferencesAirlinesByAirlineCodeGetRequest, security: operations.ReferencesAirlinesByAirlineCodeGetSecurity, config?: AxiosRequestConfig): Promise<operations.ReferencesAirlinesByAirlineCodeGetResponse>;
    /**
     * Airports
     *
     * @remarks
     * List all airports or one specific airport. All airports response is very large. It is possible to request the response in a specific language.
     */
    referencesAirportsByAirportCodeGet(req: operations.ReferencesAirportsByAirportCodeGetRequest, security: operations.ReferencesAirportsByAirportCodeGetSecurity, config?: AxiosRequestConfig): Promise<operations.ReferencesAirportsByAirportCodeGetResponse>;
    /**
     * Nearest Airports
     *
     * @remarks
     * List the 5 closest airports to the given latitude and longitude, irrespective of the radius of the reference point.
     */
    referencesAirportsNearestByLatitudeAndLongitudeGet(req: operations.ReferencesAirportsNearestByLatitudeAndLongitudeGetRequest, security: operations.ReferencesAirportsNearestByLatitudeAndLongitudeGetSecurity, config?: AxiosRequestConfig): Promise<operations.ReferencesAirportsNearestByLatitudeAndLongitudeGetResponse>;
    /**
     * Cities
     *
     * @remarks
     * List all cities or one specific city. It is possible to request the response in a specific language.
     */
    referencesCitiesByCityCodeGet(req: operations.ReferencesCitiesByCityCodeGetRequest, security: operations.ReferencesCitiesByCityCodeGetSecurity, config?: AxiosRequestConfig): Promise<operations.ReferencesCitiesByCityCodeGetResponse>;
    /**
     * Countries
     *
     * @remarks
     * List all countries or one specific country. It is possible to request the response in a specific language.
     */
    referencesCountriesByCountryCodeGet(req: operations.ReferencesCountriesByCountryCodeGetRequest, security: operations.ReferencesCountriesByCountryCodeGetSecurity, config?: AxiosRequestConfig): Promise<operations.ReferencesCountriesByCountryCodeGetResponse>;
}
