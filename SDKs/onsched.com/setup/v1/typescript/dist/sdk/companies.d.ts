import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Companies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteSetupV1CompaniesDomainsId - Deletes a whitelisted domain for the authorized company
     * Returns view of domain deleted
    **/
    deleteSetupV1CompaniesDomainsId(req: operations.DeleteSetupV1CompaniesDomainsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1CompaniesDomainsIdResponse>;
    /**
     * deleteSetupV1CompaniesEmailTemplatesMaster - Deletes custom master email template settings reverting to the default
     *
     * Settings exist for showing or hiding panels
     * and for changing color schemes
    **/
    deleteSetupV1CompaniesEmailTemplatesMaster(config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1CompaniesEmailTemplatesMasterResponse>;
    /**
     * deleteSetupV1CompaniesRegionsId - Delete a region
     *
     * Deletes a region.
     *
     * If the region is related to any business locations it cannot be deleted
    **/
    deleteSetupV1CompaniesRegionsId(req: operations.DeleteSetupV1CompaniesRegionsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1CompaniesRegionsIdResponse>;
    /**
     * getSetupV1Companies - Returns a company profile information of the authorized company
    **/
    getSetupV1Companies(config?: AxiosRequestConfig): Promise<operations.GetSetupV1CompaniesResponse>;
    /**
     * getSetupV1CompaniesDomains - Returns a list of whitelisted domains for the authorized company
    **/
    getSetupV1CompaniesDomains(config?: AxiosRequestConfig): Promise<operations.GetSetupV1CompaniesDomainsResponse>;
    /**
     * getSetupV1CompaniesDomainsId - Returns a whitelisted domain for the authorized company
    **/
    getSetupV1CompaniesDomainsId(req: operations.GetSetupV1CompaniesDomainsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1CompaniesDomainsIdResponse>;
    /**
     * getSetupV1CompaniesEmailTemplates - Returns email template list from the authorized company
     *
     * Returns a list of email templates that may be customized
     * If the template has been customized, the customized property is true.
     * The scope parameter indicates if the email template has been customized
     * at Business Location level or Company level.
     * This endpoint returns only company level templates so the scope is always company
    **/
    getSetupV1CompaniesEmailTemplates(config?: AxiosRequestConfig): Promise<operations.GetSetupV1CompaniesEmailTemplatesResponse>;
    /**
     * getSetupV1CompaniesEmailTemplatesMaster - Returns master email template settings
     *
     * Settings exist for showing or hiding panels
     * and for changing color schemes
    **/
    getSetupV1CompaniesEmailTemplatesMaster(config?: AxiosRequestConfig): Promise<operations.GetSetupV1CompaniesEmailTemplatesMasterResponse>;
    /**
     * getSetupV1CompaniesEmailTemplatesTemplateName - Returns default or custom email template from the authorized company
     *
     * The default email template is returned when a custom template is not found
     * The response content is in html format.
    **/
    getSetupV1CompaniesEmailTemplatesTemplateName(req: operations.GetSetupV1CompaniesEmailTemplatesTemplateNameRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1CompaniesEmailTemplatesTemplateNameResponse>;
    /**
     * getSetupV1CompaniesRegions - Returns a list of regions.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    getSetupV1CompaniesRegions(req: operations.GetSetupV1CompaniesRegionsRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1CompaniesRegionsResponse>;
    /**
     * getSetupV1CompaniesRegionsId - Get a Region
    **/
    getSetupV1CompaniesRegionsId(req: operations.GetSetupV1CompaniesRegionsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1CompaniesRegionsIdResponse>;
    /**
     * getSetupV1CompaniesTimezonesDate - Returns timezone information for all supported Timezone's
     *
     * The result returned is a single location object. An id is required to find the location. Find location id's using the GET consumer/v1/locations end point,
    **/
    getSetupV1CompaniesTimezonesDate(req: operations.GetSetupV1CompaniesTimezonesDateRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1CompaniesTimezonesDateResponse>;
    /**
     * postSetupV1Companies - Creates a company profile.
     *
     * Use this endpoint to create a new Company Profile.
     * This endpoint is restricted by scope and limited to use by OnSched internal apps
     *
     * The timezoneName can be expressed as an Iana Timezone e.g. America/New_York
     * or a Microsoft Timezone e.g. Eastern Standard Time
    **/
    postSetupV1Companies(req: operations.PostSetupV1CompaniesRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1CompaniesResponse>;
    /**
     * postSetupV1CompaniesDomains - Creates a whitelisted domain for the authorized company
     * Returns view of domain created
    **/
    postSetupV1CompaniesDomains(req: operations.PostSetupV1CompaniesDomainsRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1CompaniesDomainsResponse>;
    /**
     * postSetupV1CompaniesEmailTemplatesMaster - Updates / creates custom master email template settings
     *
     * Settings exist for showing or hiding panels
     * and for changing color schemes
    **/
    postSetupV1CompaniesEmailTemplatesMaster(req: operations.PostSetupV1CompaniesEmailTemplatesMasterRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1CompaniesEmailTemplatesMasterResponse>;
    /**
     * postSetupV1CompaniesRegions - Create a new region
     *
     * Creates a new region.
     *
     * Regions can be mapped to business locations. Locations can be filtered by region id
    **/
    postSetupV1CompaniesRegions(req: operations.PostSetupV1CompaniesRegionsRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1CompaniesRegionsResponse>;
    /**
     * putSetupV1Companies - Updates a company object.
     *
     * Use this endpoint to update the authorized company.
     *
     * Your client credentials resolve to a single company.
     *
     * The timezoneName can be expressed as an Iana Timezone e.g. America/New_York
     * or a Microsoft Timezone e.g. Eastern Standard Time
    **/
    putSetupV1Companies(req: operations.PutSetupV1CompaniesRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1CompaniesResponse>;
    /**
     * putSetupV1CompaniesDomainsId - Updates a whitelisted domain for the authorized company
     * Returns view of domain updated
    **/
    putSetupV1CompaniesDomainsId(req: operations.PutSetupV1CompaniesDomainsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1CompaniesDomainsIdResponse>;
    /**
     * putSetupV1CompaniesRegionsId - Update a region
     *
     * Updates a region.
     *
     * Regions can be mapped to business locations. Locations can be filtered by region id.
    **/
    putSetupV1CompaniesRegionsId(req: operations.PutSetupV1CompaniesRegionsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1CompaniesRegionsIdResponse>;
}
