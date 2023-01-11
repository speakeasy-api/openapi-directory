import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ReferenceData {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * referencesAircraftByAircraftCodeGet - Aircraft
     *
     * List all aircraft types or one specific aircraft type.
    **/
    referencesAircraftByAircraftCodeGet(req: operations.ReferencesAircraftByAircraftCodeGetRequest, config?: AxiosRequestConfig): Promise<operations.ReferencesAircraftByAircraftCodeGetResponse>;
    /**
     * referencesAirlinesByAirlineCodeGet - Airlines
     *
     * List all airlines or one specific airline.
    **/
    referencesAirlinesByAirlineCodeGet(req: operations.ReferencesAirlinesByAirlineCodeGetRequest, config?: AxiosRequestConfig): Promise<operations.ReferencesAirlinesByAirlineCodeGetResponse>;
    /**
     * referencesAirportsByAirportCodeGet - Airports
     *
     * List all airports or one specific airport. All airports response is very large. It is possible to request the response in a specific language.
    **/
    referencesAirportsByAirportCodeGet(req: operations.ReferencesAirportsByAirportCodeGetRequest, config?: AxiosRequestConfig): Promise<operations.ReferencesAirportsByAirportCodeGetResponse>;
    /**
     * referencesAirportsNearestByLatitudeAndLongitudeGet - Nearest Airports
     *
     * List the 5 closest airports to the given latitude and longitude, irrespective of the radius of the reference point.
    **/
    referencesAirportsNearestByLatitudeAndLongitudeGet(req: operations.ReferencesAirportsNearestByLatitudeAndLongitudeGetRequest, config?: AxiosRequestConfig): Promise<operations.ReferencesAirportsNearestByLatitudeAndLongitudeGetResponse>;
    /**
     * referencesCitiesByCityCodeGet - Cities
     *
     * List all cities or one specific city. It is possible to request the response in a specific language.
    **/
    referencesCitiesByCityCodeGet(req: operations.ReferencesCitiesByCityCodeGetRequest, config?: AxiosRequestConfig): Promise<operations.ReferencesCitiesByCityCodeGetResponse>;
    /**
     * referencesCountriesByCountryCodeGet - Countries
     *
     * List all countries or one specific country. It is possible to request the response in a specific language.
    **/
    referencesCountriesByCountryCodeGet(req: operations.ReferencesCountriesByCountryCodeGetRequest, config?: AxiosRequestConfig): Promise<operations.ReferencesCountriesByCountryCodeGetResponse>;
}
