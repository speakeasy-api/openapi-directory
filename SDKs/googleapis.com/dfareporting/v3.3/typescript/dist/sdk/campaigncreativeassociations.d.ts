import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CampaignCreativeAssociations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Associates a creative with the specified campaign. This method creates a default ad with dimensions matching the creative in the campaign if such a default ad does not exist already.
     */
    dfareportingCampaignCreativeAssociationsInsert(req: operations.DfareportingCampaignCreativeAssociationsInsertRequest, security: operations.DfareportingCampaignCreativeAssociationsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingCampaignCreativeAssociationsInsertResponse>;
    /**
     * Retrieves the list of creative IDs associated with the specified campaign. This method supports paging.
     */
    dfareportingCampaignCreativeAssociationsList(req: operations.DfareportingCampaignCreativeAssociationsListRequest, security: operations.DfareportingCampaignCreativeAssociationsListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingCampaignCreativeAssociationsListResponse>;
}
