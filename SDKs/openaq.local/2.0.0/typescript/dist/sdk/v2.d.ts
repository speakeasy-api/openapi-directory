import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class V2 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * averagesV2GetV2AveragesGet - Averages V2 Get
    **/
    averagesV2GetV2AveragesGet(req: operations.AveragesV2GetV2AveragesGetRequest, config?: AxiosRequestConfig): Promise<operations.AveragesV2GetV2AveragesGetResponse>;
    /**
     * citiesGetV2CitiesGet - Provides a simple listing of cities within the platform
    **/
    citiesGetV2CitiesGet(req: operations.CitiesGetV2CitiesGetRequest, config?: AxiosRequestConfig): Promise<operations.CitiesGetV2CitiesGetResponse>;
    /**
     * countriesGetV2CountriesCountryIdGet - Countries Get
    **/
    countriesGetV2CountriesCountryIdGet(req: operations.CountriesGetV2CountriesCountryIdGetRequest, config?: AxiosRequestConfig): Promise<operations.CountriesGetV2CountriesCountryIdGetResponse>;
    /**
     * countriesGetV2CountriesGet - Countries Get
    **/
    countriesGetV2CountriesGet(req: operations.CountriesGetV2CountriesGetRequest, config?: AxiosRequestConfig): Promise<operations.CountriesGetV2CountriesGetResponse>;
    /**
     * demoV2LocationsTilesViewerGet - Demo
    **/
    demoV2LocationsTilesViewerGet(config?: AxiosRequestConfig): Promise<operations.DemoV2LocationsTilesViewerGetResponse>;
    /**
     * getMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGet - Get Mobilegentile
    **/
    getMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGet(req: operations.GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetRequest, config?: AxiosRequestConfig): Promise<operations.GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetResponse>;
    /**
     * getMobiletileV2LocationsTilesMobileZXYPbfGet - Get Mobiletile
    **/
    getMobiletileV2LocationsTilesMobileZXYPbfGet(req: operations.GetMobiletileV2LocationsTilesMobileZxyPbfGetRequest, config?: AxiosRequestConfig): Promise<operations.GetMobiletileV2LocationsTilesMobileZxyPbfGetResponse>;
    /**
     * getTileV2LocationsTilesZXYPbfGet - Get Tile
    **/
    getTileV2LocationsTilesZXYPbfGet(req: operations.GetTileV2LocationsTilesZxyPbfGetRequest, config?: AxiosRequestConfig): Promise<operations.GetTileV2LocationsTilesZxyPbfGetResponse>;
    /**
     * latestGetV2LatestLocationIdGet - Latest Get
    **/
    latestGetV2LatestLocationIdGet(req: operations.LatestGetV2LatestLocationIdGetRequest, config?: AxiosRequestConfig): Promise<operations.LatestGetV2LatestLocationIdGetResponse>;
    /**
     * latestGetV2LatestGet - Latest Get
    **/
    latestGetV2LatestGet(req: operations.LatestGetV2LatestGetRequest, config?: AxiosRequestConfig): Promise<operations.LatestGetV2LatestGetResponse>;
    /**
     * locationsGetV2LocationsLocationIdGet - Locations Get
    **/
    locationsGetV2LocationsLocationIdGet(req: operations.LocationsGetV2LocationsLocationIdGetRequest, config?: AxiosRequestConfig): Promise<operations.LocationsGetV2LocationsLocationIdGetResponse>;
    /**
     * locationsGetV2LocationsGet - Locations Get
    **/
    locationsGetV2LocationsGet(req: operations.LocationsGetV2LocationsGetRequest, config?: AxiosRequestConfig): Promise<operations.LocationsGetV2LocationsGetResponse>;
    /**
     * measurementsGetV2MeasurementsGet - Measurements Get
    **/
    measurementsGetV2MeasurementsGet(req: operations.MeasurementsGetV2MeasurementsGetRequest, config?: AxiosRequestConfig): Promise<operations.MeasurementsGetV2MeasurementsGetResponse>;
    /**
     * mfrGetV2ManufacturersGet - Mfr Get
    **/
    mfrGetV2ManufacturersGet(config?: AxiosRequestConfig): Promise<operations.MfrGetV2ManufacturersGetResponse>;
    /**
     * mobilegentilejsonV2LocationsTilesMobileGeneralizedTilesJsonGet - Mobilegentilejson
    **/
    mobilegentilejsonV2LocationsTilesMobileGeneralizedTilesJsonGet(config?: AxiosRequestConfig): Promise<operations.MobilegentilejsonV2LocationsTilesMobileGeneralizedTilesJsonGetResponse>;
    /**
     * mobiletilejsonV2LocationsTilesMobileTilesJsonGet - Mobiletilejson
    **/
    mobiletilejsonV2LocationsTilesMobileTilesJsonGet(config?: AxiosRequestConfig): Promise<operations.MobiletilejsonV2LocationsTilesMobileTilesJsonGetResponse>;
    /**
     * modelGetV2ModelsGet - Model Get
    **/
    modelGetV2ModelsGet(config?: AxiosRequestConfig): Promise<operations.ModelGetV2ModelsGetResponse>;
    /**
     * parametersGetV2ParametersGet - Parameters Get
    **/
    parametersGetV2ParametersGet(req: operations.ParametersGetV2ParametersGetRequest, config?: AxiosRequestConfig): Promise<operations.ParametersGetV2ParametersGetResponse>;
    /**
     * projectsGetV2ProjectsProjectIdGet - Projects Get
    **/
    projectsGetV2ProjectsProjectIdGet(req: operations.ProjectsGetV2ProjectsProjectIdGetRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsGetV2ProjectsProjectIdGetResponse>;
    /**
     * projectsGetV2ProjectsGet - Projects Get
    **/
    projectsGetV2ProjectsGet(req: operations.ProjectsGetV2ProjectsGetRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsGetV2ProjectsGetResponse>;
    /**
     * readmeGetV2SourcesReadmeSlugGet - Readme Get
    **/
    readmeGetV2SourcesReadmeSlugGet(req: operations.ReadmeGetV2SourcesReadmeSlugGetRequest, config?: AxiosRequestConfig): Promise<operations.ReadmeGetV2SourcesReadmeSlugGetResponse>;
    /**
     * sourcesGetV2SourcesGet - Sources Get
    **/
    sourcesGetV2SourcesGet(req: operations.SourcesGetV2SourcesGetRequest, config?: AxiosRequestConfig): Promise<operations.SourcesGetV2SourcesGetResponse>;
    /**
     * summaryGetV2SummaryGet - Summary Get
    **/
    summaryGetV2SummaryGet(config?: AxiosRequestConfig): Promise<operations.SummaryGetV2SummaryGetResponse>;
    /**
     * tilejsonV2LocationsTilesTilesJsonGet - Tilejson
    **/
    tilejsonV2LocationsTilesTilesJsonGet(config?: AxiosRequestConfig): Promise<operations.TilejsonV2LocationsTilesTilesJsonGetResponse>;
}
