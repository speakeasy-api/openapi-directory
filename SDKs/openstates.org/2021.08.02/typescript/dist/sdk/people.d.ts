import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class People {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * peopleGeoPeopleGeoGet - People Geo
     *
     * Get list of people currently representing a given location.
     *
     * **Note:** Currently limited to state legislators.  Governors & mayors are not included.
    **/
    peopleGeoPeopleGeoGet(req: operations.PeopleGeoPeopleGeoGetRequest, config?: AxiosRequestConfig): Promise<operations.PeopleGeoPeopleGeoGetResponse>;
    /**
     * peopleSearchPeopleGet - People Search
     *
     * Get list of people matching selected criteria.
     *
     * Must provide either **jurisdiction**, **name**, or one or more **id** parameters.
    **/
    peopleSearchPeopleGet(req: operations.PeopleSearchPeopleGetRequest, config?: AxiosRequestConfig): Promise<operations.PeopleSearchPeopleGetResponse>;
}
