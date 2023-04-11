import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * differents requests to filter cards
 */
export declare class Filters {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    getCategories(config?: AxiosRequestConfig): Promise<operations.GetCategoriesResponse>;
    getCategoriesCategory(req: operations.GetCategoriesCategoryRequest, config?: AxiosRequestConfig): Promise<operations.GetCategoriesCategoryResponse>;
    getDexIds(config?: AxiosRequestConfig): Promise<operations.GetDexIdsResponse>;
    getDexIdsDexId(req: operations.GetDexIdsDexIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDexIdsDexIdResponse>;
    getEnergyTypes(config?: AxiosRequestConfig): Promise<operations.GetEnergyTypesResponse>;
    getEnergyTypesEnergyType(req: operations.GetEnergyTypesEnergyTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetEnergyTypesEnergyTypeResponse>;
    getHp(config?: AxiosRequestConfig): Promise<operations.GetHpResponse>;
    getHpHp(req: operations.GetHpHpRequest, config?: AxiosRequestConfig): Promise<operations.GetHpHpResponse>;
    getIllustrators(config?: AxiosRequestConfig): Promise<operations.GetIllustratorsResponse>;
    getIllustratorsIllustrator(req: operations.GetIllustratorsIllustratorRequest, config?: AxiosRequestConfig): Promise<operations.GetIllustratorsIllustratorResponse>;
    getRarities(config?: AxiosRequestConfig): Promise<operations.GetRaritiesResponse>;
    getRaritiesRarity(req: operations.GetRaritiesRarityRequest, config?: AxiosRequestConfig): Promise<operations.GetRaritiesRarityResponse>;
    getRegulationMarks(config?: AxiosRequestConfig): Promise<operations.GetRegulationMarksResponse>;
    getRegulationMarksRegulationMark(req: operations.GetRegulationMarksRegulationMarkRequest, config?: AxiosRequestConfig): Promise<operations.GetRegulationMarksRegulationMarkResponse>;
    getRetreats(config?: AxiosRequestConfig): Promise<operations.GetRetreatsResponse>;
    getRetreatsRetreat(req: operations.GetRetreatsRetreatRequest, config?: AxiosRequestConfig): Promise<operations.GetRetreatsRetreatResponse>;
    getSeries(config?: AxiosRequestConfig): Promise<operations.GetSeriesResponse>;
    getSeriesSerie(req: operations.GetSeriesSerieRequest, config?: AxiosRequestConfig): Promise<operations.GetSeriesSerieResponse>;
    getSets(config?: AxiosRequestConfig): Promise<operations.GetSetsResponse>;
    getSetsSet(req: operations.GetSetsSetRequest, config?: AxiosRequestConfig): Promise<operations.GetSetsSetResponse>;
    getStages(config?: AxiosRequestConfig): Promise<operations.GetStagesResponse>;
    getStagesStage(req: operations.GetStagesStageRequest, config?: AxiosRequestConfig): Promise<operations.GetStagesStageResponse>;
    getSuffixes(config?: AxiosRequestConfig): Promise<operations.GetSuffixesResponse>;
    getSuffixesSuffix(req: operations.GetSuffixesSuffixRequest, config?: AxiosRequestConfig): Promise<operations.GetSuffixesSuffixResponse>;
    getTrainerTypes(config?: AxiosRequestConfig): Promise<operations.GetTrainerTypesResponse>;
    getTrainerTypesTrainerType(req: operations.GetTrainerTypesTrainerTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetTrainerTypesTrainerTypeResponse>;
    getTypes(config?: AxiosRequestConfig): Promise<operations.GetTypesResponse>;
    getTypesType(req: operations.GetTypesTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetTypesTypeResponse>;
    getVariants(config?: AxiosRequestConfig): Promise<operations.GetVariantsResponse>;
    getVariantsVariant(req: operations.GetVariantsVariantRequest, config?: AxiosRequestConfig): Promise<operations.GetVariantsVariantResponse>;
}
