import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class V2 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Averages V2 Get
     */
    averagesV2GetV2AveragesGet(req: operations.AveragesV2GetV2AveragesGetRequest, config?: AxiosRequestConfig): Promise<operations.AveragesV2GetV2AveragesGetResponse>;
    /**
     * Provides a simple listing of cities within the platform
     */
    citiesGetV2CitiesGet(req: operations.CitiesGetV2CitiesGetRequest, config?: AxiosRequestConfig): Promise<operations.CitiesGetV2CitiesGetResponse>;
    /**
     * Countries Get
     */
    countriesGetV2CountriesCountryIdGet(req: operations.CountriesGetV2CountriesCountryIdGetRequest, config?: AxiosRequestConfig): Promise<operations.CountriesGetV2CountriesCountryIdGetResponse>;
    /**
     * Countries Get
     */
    countriesGetV2CountriesGet(req: operations.CountriesGetV2CountriesGetRequest, config?: AxiosRequestConfig): Promise<operations.CountriesGetV2CountriesGetResponse>;
    /**
     * Demo
     */
    demoV2LocationsTilesViewerGet(config?: AxiosRequestConfig): Promise<operations.DemoV2LocationsTilesViewerGetResponse>;
    /**
     * Get Mobilegentile
     */
    getMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGet(req: operations.GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetRequest, config?: AxiosRequestConfig): Promise<operations.GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetResponse>;
    /**
     * Get Mobiletile
     */
    getMobiletileV2LocationsTilesMobileZXYPbfGet(req: operations.GetMobiletileV2LocationsTilesMobileZXYPbfGetRequest, config?: AxiosRequestConfig): Promise<operations.GetMobiletileV2LocationsTilesMobileZXYPbfGetResponse>;
    /**
     * Get Tile
     */
    getTileV2LocationsTilesZXYPbfGet(req: operations.GetTileV2LocationsTilesZXYPbfGetRequest, config?: AxiosRequestConfig): Promise<operations.GetTileV2LocationsTilesZXYPbfGetResponse>;
    /**
     * Latest Get
     */
    latestGetV2LatestLocationIdGet(req: operations.LatestGetV2LatestLocationIdGetRequest, config?: AxiosRequestConfig): Promise<operations.LatestGetV2LatestLocationIdGetResponse>;
    /**
     * Latest Get
     */
    latestGetV2LatestGet(req: operations.LatestGetV2LatestGetRequest, config?: AxiosRequestConfig): Promise<operations.LatestGetV2LatestGetResponse>;
    /**
     * Locations Get
     */
    locationsGetV2LocationsLocationIdGet(req: operations.LocationsGetV2LocationsLocationIdGetRequest, config?: AxiosRequestConfig): Promise<operations.LocationsGetV2LocationsLocationIdGetResponse>;
    /**
     * Locations Get
     */
    locationsGetV2LocationsGet(req: operations.LocationsGetV2LocationsGetRequest, config?: AxiosRequestConfig): Promise<operations.LocationsGetV2LocationsGetResponse>;
    /**
     * Measurements Get
     */
    measurementsGetV2MeasurementsGet(req: operations.MeasurementsGetV2MeasurementsGetRequest, config?: AxiosRequestConfig): Promise<operations.MeasurementsGetV2MeasurementsGetResponse>;
    /**
     * Mfr Get
     */
    mfrGetV2ManufacturersGet(config?: AxiosRequestConfig): Promise<operations.MfrGetV2ManufacturersGetResponse>;
    /**
     * Mobilegentilejson
     */
    mobilegentilejsonV2LocationsTilesMobileGeneralizedTilesJsonGet(config?: AxiosRequestConfig): Promise<operations.MobilegentilejsonV2LocationsTilesMobileGeneralizedTilesJsonGetResponse>;
    /**
     * Mobiletilejson
     */
    mobiletilejsonV2LocationsTilesMobileTilesJsonGet(config?: AxiosRequestConfig): Promise<operations.MobiletilejsonV2LocationsTilesMobileTilesJsonGetResponse>;
    /**
     * Model Get
     */
    modelGetV2ModelsGet(config?: AxiosRequestConfig): Promise<operations.ModelGetV2ModelsGetResponse>;
    /**
     * Parameters Get
     */
    parametersGetV2ParametersGet(req: operations.ParametersGetV2ParametersGetRequest, config?: AxiosRequestConfig): Promise<operations.ParametersGetV2ParametersGetResponse>;
    /**
     * Projects Get
     */
    projectsGetV2ProjectsProjectIdGet(req: operations.ProjectsGetV2ProjectsProjectIdGetRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsGetV2ProjectsProjectIdGetResponse>;
    /**
     * Projects Get
     */
    projectsGetV2ProjectsGet(req: operations.ProjectsGetV2ProjectsGetRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsGetV2ProjectsGetResponse>;
    /**
     * Readme Get
     */
    readmeGetV2SourcesReadmeSlugGet(req: operations.ReadmeGetV2SourcesReadmeSlugGetRequest, config?: AxiosRequestConfig): Promise<operations.ReadmeGetV2SourcesReadmeSlugGetResponse>;
    /**
     * Sources Get
     */
    sourcesGetV2SourcesGet(req: operations.SourcesGetV2SourcesGetRequest, config?: AxiosRequestConfig): Promise<operations.SourcesGetV2SourcesGetResponse>;
    /**
     * Summary Get
     */
    summaryGetV2SummaryGet(config?: AxiosRequestConfig): Promise<operations.SummaryGetV2SummaryGetResponse>;
    /**
     * Tilejson
     */
    tilejsonV2LocationsTilesTilesJsonGet(config?: AxiosRequestConfig): Promise<operations.TilejsonV2LocationsTilesTilesJsonGetResponse>;
}
