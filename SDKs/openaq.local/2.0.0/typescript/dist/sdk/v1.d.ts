import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class V1 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Provides a simple listing of cities within the platform
     */
    citiesGetv1V1CitiesGet(req: operations.CitiesGetv1V1CitiesGetRequest, config?: AxiosRequestConfig): Promise<operations.CitiesGetv1V1CitiesGetResponse>;
    /**
     * Countries Get
     */
    countriesGetV1CountriesCountryIdGet(req: operations.CountriesGetV1CountriesCountryIdGetRequest, config?: AxiosRequestConfig): Promise<operations.CountriesGetV1CountriesCountryIdGetResponse>;
    /**
     * Countries Getv1
     */
    countriesGetv1V1CountriesGet(req: operations.CountriesGetv1V1CountriesGetRequest, config?: AxiosRequestConfig): Promise<operations.CountriesGetv1V1CountriesGetResponse>;
    /**
     * Latest V1 Get
     */
    latestV1GetV1LatestLocationIdGet(req: operations.LatestV1GetV1LatestLocationIdGetRequest, config?: AxiosRequestConfig): Promise<operations.LatestV1GetV1LatestLocationIdGetResponse>;
    /**
     * Latest V1 Get
     */
    latestV1GetV1LatestGet(req: operations.LatestV1GetV1LatestGetRequest, config?: AxiosRequestConfig): Promise<operations.LatestV1GetV1LatestGetResponse>;
    /**
     * Locationsv1 Get
     */
    locationsv1GetV1LocationsLocationIdGet(req: operations.Locationsv1GetV1LocationsLocationIdGetRequest, config?: AxiosRequestConfig): Promise<operations.Locationsv1GetV1LocationsLocationIdGetResponse>;
    /**
     * Locationsv1 Get
     */
    locationsv1GetV1LocationsGet(req: operations.Locationsv1GetV1LocationsGetRequest, config?: AxiosRequestConfig): Promise<operations.Locationsv1GetV1LocationsGetResponse>;
    /**
     * Measurements Get V1
     */
    measurementsGetV1V1MeasurementsGet(req: operations.MeasurementsGetV1V1MeasurementsGetRequest, config?: AxiosRequestConfig): Promise<operations.MeasurementsGetV1V1MeasurementsGetResponse>;
    /**
     * Parameters Getv1
     */
    parametersGetv1V1ParametersGet(req: operations.ParametersGetv1V1ParametersGetRequest, config?: AxiosRequestConfig): Promise<operations.ParametersGetv1V1ParametersGetResponse>;
    /**
     * Sources V1 Get
     */
    sourcesV1GetV1SourcesGet(req: operations.SourcesV1GetV1SourcesGetRequest, config?: AxiosRequestConfig): Promise<operations.SourcesV1GetV1SourcesGetResponse>;
}
