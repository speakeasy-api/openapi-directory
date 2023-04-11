import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Companies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete Company Domain
     *
     * @remarks
     * <p>Use this endpoint to <b>Delete</b> an OnSchedJs domain from your authorized company. A valid <b>companyDomain id</b> is required.</p>
     */
    deleteSetupV1CompaniesDomainsId(req: operations.DeleteSetupV1CompaniesDomainsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1CompaniesDomainsIdResponse>;
    /**
     * Delete Master Template Settings
     *
     * @remarks
     * <p>Use this endpoint to <b>Delete Custom Master Email Template Settings</b>. Deleting a custom master email template setting will reactivate the original default OnSched template settings.</p>
     */
    deleteSetupV1CompaniesEmailTemplatesMaster(config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1CompaniesEmailTemplatesMasterResponse>;
    /**
     * Delete Region
     *
     * @remarks
     * <p>Use this endpoint to <b>Delete</b> a region object. A valid <b>region id</b> is required. If the region is related to any business locations it won't be deleted. You must first remove any references to region id from the business locations prior to deleting.</p>
     */
    deleteSetupV1CompaniesRegionsId(req: operations.DeleteSetupV1CompaniesRegionsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1CompaniesRegionsIdResponse>;
    /**
     * Get Company
     *
     * @remarks
     * <p>Use this endpoint to return the <b>Authorized Company</b> information. The company is the main entity that oversees all business locations defined below it, hierarchically. </p>
     * <p>Access to the company credentials gives you access to all business locations defined in the authorized company. Client credentials resolve to a single company and are purposely hidden from this endpoint.</p>
     */
    getSetupV1Companies(config?: AxiosRequestConfig): Promise<operations.GetSetupV1CompaniesResponse>;
    /**
     * List Company Domains
     *
     * @remarks
     * <p>Use this endpoint to return a <b>List of Company Domains</b> for the authorized company. To share the OnSchedJS booking widget on your website or in your application your domain must be listed.</p>
     */
    getSetupV1CompaniesDomains(config?: AxiosRequestConfig): Promise<operations.GetSetupV1CompaniesDomainsResponse>;
    /**
     * Get Company Domain
     *
     * @remarks
     * <p>Use this endpoint to return a <b>Company Domain</b> object. A valid <b>companyDomain id</b> is required. </p>
     */
    getSetupV1CompaniesDomainsId(req: operations.GetSetupV1CompaniesDomainsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1CompaniesDomainsIdResponse>;
    /**
     * List Email Templates
     *
     * @remarks
     * <p>Use this endpoint to return a <b>List of Email Templates</b> that are provided and may be customized. If the template has been customized, the customized property is true. The scope parameter indicates if the email template has been customized at the Business Location level or Company level. This endpoint returns <b>only company level templates</b>, so the scope is always company.</p>
     */
    getSetupV1CompaniesEmailTemplates(config?: AxiosRequestConfig): Promise<operations.GetSetupV1CompaniesEmailTemplatesResponse>;
    /**
     * Get Master Template Settings
     *
     * @remarks
     * <p>Use this endpoint to return the <b>Master Email Template Settings</b>. Settings exist for showing or hiding email panels and for changing color schemes. </p>
     */
    getSetupV1CompaniesEmailTemplatesMaster(config?: AxiosRequestConfig): Promise<operations.GetSetupV1CompaniesEmailTemplatesMasterResponse>;
    /**
     * Get Email Template
     *
     * @remarks
     * <p>Use this endpoint to return the requested <b>Email Template</b>. If it wasn't customized the default template is returned. The response content is in html format. A valid emailTemplate <b>name</b> is required. Find template names by using the: <i>GET  /setup /v1 /companies /email /templates</i> endpoint. Note: The master template cannot be accessed here. </p>
     * <p>To create custom company email templates, go to the <i>POST  /setup /v1 /locations /{id} /email /templates</i> endpoint and create a template using the Primary Business Location Id.</p>
     */
    getSetupV1CompaniesEmailTemplatesTemplateName(req: operations.GetSetupV1CompaniesEmailTemplatesTemplateNameRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1CompaniesEmailTemplatesTemplateNameResponse>;
    /**
     * List Regions
     *
     * @remarks
     * <p>Use this endpoint to return a list of <b>Regions</b> in the authorized company. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further. </p>
     */
    getSetupV1CompaniesRegions(req: operations.GetSetupV1CompaniesRegionsRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1CompaniesRegionsResponse>;
    /**
     * Get Region
     *
     * @remarks
     * <p>Use this endpoint to return a <b>Region</b> object. A valid <b>region id</b> is required.</p>
     */
    getSetupV1CompaniesRegionsId(req: operations.GetSetupV1CompaniesRegionsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1CompaniesRegionsIdResponse>;
    /**
     * List Time Zones
     *
     * @remarks
     * <p>Use this endpoint to return a <b>List of timezone names, timezoneIana and tzOffset values</b> calculated for the date requested. Daylight Savings may or may not apply depending on the date specified.</p>
     */
    getSetupV1CompaniesTimezonesDate(req: operations.GetSetupV1CompaniesTimezonesDateRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1CompaniesTimezonesDateResponse>;
    /**
     * Create Company
     *
     * @remarks
     * <p>Use this endpoint to <b>Create</b> a new authorized company.</p>
     * <p>
     *   <b>Note: Special API Partner credentials are required to access this endpoint.</b>
     * </p>
     * <p>The <b>name, registrationEmail, phone, country</b> and <b>timezoneName</b> are required fields. For <b>country</b> use the standard ISO 3166 2-character country code.</p>
     * <p>The <b>timezoneName</b> must be expressed as an IANA Timezone e.g., <i>America/New_York</i>.</p>
     * <p>For more information: <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones">Timezone IANA Wiki</a></p>
     */
    postSetupV1Companies(req: shared.CompanyInputModel, config?: AxiosRequestConfig): Promise<operations.PostSetupV1CompaniesResponse>;
    /**
     * Create Company Domain
     *
     * @remarks
     * <p>Use this endpoint to <b>Create</b> an OnSchedJs domain for your authorized company. To share the OnSchedJS booking widget on your website or in your application you must add the domain.</p>
     */
    postSetupV1CompaniesDomains(req: shared.CompanyDomainInputModel, config?: AxiosRequestConfig): Promise<operations.PostSetupV1CompaniesDomainsResponse>;
    /**
     * Create Master Template Settings
     *
     * @remarks
     * <p>Use this endpoint to <b>Create Custom Master Email Template Settings</b>. Settings exist for showing or hiding email panels and for changing color schemes. Use the <i>GET  /setup /v1 /companies /email /templates</i> endpoint to display the settings offered. Changes to the Master Template Settings will be reflected in all business locations associated with this company. </p>
     * <p>The email template endpoints work a little differently than most. There are no endpoints to update the templates, we use the post endpoint to create a custom template instead. This endpoint creates a new custom Master Template Settings file that will be used instead. If you delete it you are deleting the custom template settings you created and the original default Master Template created by OnSched would be reactivated.</p>
     */
    postSetupV1CompaniesEmailTemplatesMaster(req: shared.MasterTemplateSettingsInputModel, config?: AxiosRequestConfig): Promise<operations.PostSetupV1CompaniesEmailTemplatesMasterResponse>;
    /**
     * Create Region
     *
     * @remarks
     * <p>Use this endpoint to <b>Create</b> a region object. Regions can be mapped to business locations. They can be used by the locations endpoints to filter locations by region id.</p>
     */
    postSetupV1CompaniesRegions(req: shared.RegionInputModel, config?: AxiosRequestConfig): Promise<operations.PostSetupV1CompaniesRegionsResponse>;
    /**
     * Update Company
     *
     * @remarks
     * <p>Use this endpoint to <b>Update</b> the authorized company information. Your client credentials resolve to a single company. The timezoneName must be expressed as an IANA Timezone, e.g., <i>America/New_York</i>. </p>
     * <p>For more information: <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones">Timezone IANA Wiki</a></p>
     */
    putSetupV1Companies(req: shared.CompanyUpdateModel, config?: AxiosRequestConfig): Promise<operations.PutSetupV1CompaniesResponse>;
    /**
     * Update Company Domain
     *
     * @remarks
     * <p>Use this endpoint to <b>Update</b> an OnSchedJs domain for your authorized company. A valid <b>companyDomain id</b> is required.</p>
     */
    putSetupV1CompaniesDomainsId(req: operations.PutSetupV1CompaniesDomainsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1CompaniesDomainsIdResponse>;
    /**
     * Update Region
     *
     * @remarks
     * <p>Use this endpoint to <b>Update</b> a region object. A valid <b>region id</b> is required.</p>
     */
    putSetupV1CompaniesRegionsId(req: operations.PutSetupV1CompaniesRegionsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1CompaniesRegionsIdResponse>;
}
