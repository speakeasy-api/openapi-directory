import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Locations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteSetupV1LocationsServicesId - Deletes a location service from the specified location
     *
     * Use this endpoint to delete a location service for a location
    **/
    deleteSetupV1LocationsServicesId(req: operations.DeleteSetupV1LocationsServicesIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1LocationsServicesIdResponse>;
    /**
     * deleteSetupV1LocationsId - Deletes a location object.
     *
     * Use this endpoint to delete a location. The location is not permanently deleted and can be recovered.
    **/
    deleteSetupV1LocationsId(req: operations.DeleteSetupV1LocationsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1LocationsIdResponse>;
    /**
     * deleteSetupV1LocationsIdDeleteallimages - Deletes all images from location blob storage container
     *
     * An option exists to use upper case for matching the subdirectory name
     * Legacy apps stored pics using upper case externalId. Api uses lower case names.
    **/
    deleteSetupV1LocationsIdDeleteallimages(req: operations.DeleteSetupV1LocationsIdDeleteallimagesRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1LocationsIdDeleteallimagesResponse>;
    /**
     * deleteSetupV1LocationsIdDeleteimage - Removes a location image
     *
     * Use this endpoint to delete a previously uploaded location image.
    **/
    deleteSetupV1LocationsIdDeleteimage(req: operations.DeleteSetupV1LocationsIdDeleteimageRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1LocationsIdDeleteimageResponse>;
    /**
     * deleteSetupV1LocationsIdEmailTemplatesMaster - Deletes custom master email template settings reverting to the default
     *
     * Settings exist for showing or hiding panels
     * and for changing color schemes
    **/
    deleteSetupV1LocationsIdEmailTemplatesMaster(req: operations.DeleteSetupV1LocationsIdEmailTemplatesMasterRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1LocationsIdEmailTemplatesMasterResponse>;
    /**
     * deleteSetupV1LocationsIdEmailTemplatesTemplateName - Deletes a custom email template
     *
     * Use this endpoint to remove a custom email template.
     *
     * Custom email templates created in the primary location are company scope and inherited by all locations
     * unless overriden in a location. Templates created in any location other than the primary apply to that location only.
    **/
    deleteSetupV1LocationsIdEmailTemplatesTemplateName(req: operations.DeleteSetupV1LocationsIdEmailTemplatesTemplateNameRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1LocationsIdEmailTemplatesTemplateNameResponse>;
    /**
     * deleteSetupV1LocationsIdGoogleServiceAccount - Remove authorized access to all google calendar users in an organization
     *
     * Use this endpoint to remove authorized access to all google calendar users.
     * Calendars will no longer be synced for resources
    **/
    deleteSetupV1LocationsIdGoogleServiceAccount(req: operations.DeleteSetupV1LocationsIdGoogleServiceAccountRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1LocationsIdGoogleServiceAccountResponse>;
    /**
     * deleteSetupV1LocationsIdServices - Deletes all location services from the specified location
     *
     * Use this endpoint to delete all location services for a location
    **/
    deleteSetupV1LocationsIdServices(req: operations.DeleteSetupV1LocationsIdServicesRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1LocationsIdServicesResponse>;
    /**
     * getSetupV1Locations - Returns a list of business locations.
     *
     * Use this api end point if you have multiple business locations in your company.
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    getSetupV1Locations(req: operations.GetSetupV1LocationsRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1LocationsResponse>;
    /**
     * getSetupV1LocationsServicesId - Returns a single location services.
    **/
    getSetupV1LocationsServicesId(req: operations.GetSetupV1LocationsServicesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1LocationsServicesIdResponse>;
    /**
     * getSetupV1LocationsId - Returns a business location object.
     *
     * The result returned is a single location object. An id is required to find the location. Find location id's using the GET consumer/v1/locations end point,
    **/
    getSetupV1LocationsId(req: operations.GetSetupV1LocationsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1LocationsIdResponse>;
    /**
     * getSetupV1LocationsIdEmailTemplates - Returns email template list from the authorized company
     *
     * Returns a list of email templates that may be customized
     * If the template has been customized, the customized property is true.
     * The scope parameter indicates if the email template has been customized
     * at Business Location level or Company level.
     * Only when querying the primary business location will company scope
     * customized templates display. Otherwise, the scope shows if a template has been customized
     * at the business location level.
    **/
    getSetupV1LocationsIdEmailTemplates(req: operations.GetSetupV1LocationsIdEmailTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1LocationsIdEmailTemplatesResponse>;
    /**
     * getSetupV1LocationsIdEmailTemplatesMaster - Returns master email template settings
     *
     * Settings exist for showing or hiding panels
     * and for changing color schemes
    **/
    getSetupV1LocationsIdEmailTemplatesMaster(req: operations.GetSetupV1LocationsIdEmailTemplatesMasterRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1LocationsIdEmailTemplatesMasterResponse>;
    /**
     * getSetupV1LocationsIdEmailTemplatesTemplateName - Returns company default or custom email template from the specified location
     *
     * These are custom email templates defined with Business Scope at a location other than the primary.
     * The default email template is returned when a custom email template is not found.
    **/
    getSetupV1LocationsIdEmailTemplatesTemplateName(req: operations.GetSetupV1LocationsIdEmailTemplatesTemplateNameRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1LocationsIdEmailTemplatesTemplateNameResponse>;
    /**
     * getSetupV1LocationsIdGoogleServiceAccount - Returns google service account info
     *
     * This endpoint will not go to production. It is temporary.
    **/
    getSetupV1LocationsIdGoogleServiceAccount(req: operations.GetSetupV1LocationsIdGoogleServiceAccountRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1LocationsIdGoogleServiceAccountResponse>;
    /**
     * getSetupV1LocationsIdServices - Returns a list of location services.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    getSetupV1LocationsIdServices(req: operations.GetSetupV1LocationsIdServicesRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1LocationsIdServicesResponse>;
    /**
     * postSetupV1Locations - Creates a new location object.
     *
     * Use this endpoint to create a new business location.
     *
     * Settings can be scoped to company or location. You can have all locations use the defined company settings or individual locations
     * can define their own settings that override the company level settings.
     *
     * If you wish to update settings then pass in the settings element in the input.
     * When you are working with the Primary location, then the settings will update the company level settings.
     * Otherwise, the settings will update business location settings.
     *
     * If you wish to create a new location and want to just use the company wide settings, don't pass in the settings element in the input.
    **/
    postSetupV1Locations(req: operations.PostSetupV1LocationsRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1LocationsResponse>;
    /**
     * postSetupV1LocationsBulk - Creates new location objects.
     *
     * Use this endpoint to create new business locations. The incoming list of
     * locations cannot exceed 100 location objects for performance purposes.
     *
     * Each location object may consist of:
     * Name: The Name of the location.
     * AdminName: The Name of the location admin.
     * AdminEmail: The email address of the location admin.
     * TimezoneName: The IANA formatted name of the locations timezone.
     * FriendlyId: A friendly id to use to refer to the location.
     * Address: The physical address of the location.
     * BusinessHours: The hours of operation of the location.
     * Settings: Additional location options that can affect things like
     * the book ahead restrictions, customer bookings per day, etc.
    **/
    postSetupV1LocationsBulk(req: operations.PostSetupV1LocationsBulkRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1LocationsBulkResponse>;
    /**
     * postSetupV1LocationsIdEmailTemplates - Uploads a custom email template
     *
     * Use this endpoint to a create a custom email template. You must convert the content to a base64 encoded string.
     * Updates to the primary business location create company scoped custom templates
     * Updates to non primary business locations create business location scoped custom templates
     * The master template cannot be updated with this endpoint.
    **/
    postSetupV1LocationsIdEmailTemplates(req: operations.PostSetupV1LocationsIdEmailTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1LocationsIdEmailTemplatesResponse>;
    /**
     * postSetupV1LocationsIdEmailTemplatesMaster - Saves settings for the master email template
     *
     * Use this endpoint to a customize the master email template settings.
     * Updates to the primary business location create company scoped master email template custom settings
     * Updates to non primary business locations create business location scoped master email template custom settings
    **/
    postSetupV1LocationsIdEmailTemplatesMaster(req: operations.PostSetupV1LocationsIdEmailTemplatesMasterRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1LocationsIdEmailTemplatesMasterResponse>;
    /**
     * postSetupV1LocationsIdGoogleServiceAccount - Authorize access to all google calendar users in an organization
     *
     * Use this endpoint to authorize access to all google calendar users.
     * You must create a Google Service account as an admin of your GSuite,
     * then save credentials as a Json Key file
    **/
    postSetupV1LocationsIdGoogleServiceAccount(req: operations.PostSetupV1LocationsIdGoogleServiceAccountRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1LocationsIdGoogleServiceAccountResponse>;
    /**
     * postSetupV1LocationsIdServices - Adds location services to the specified location
     *
     * Use this endpoint to explicitly define what company scoped services
     * at this location are offered. GET locations allows serviceId as a
     * search parameter.
    **/
    postSetupV1LocationsIdServices(req: operations.PostSetupV1LocationsIdServicesRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1LocationsIdServicesResponse>;
    /**
     * postSetupV1LocationsIdUploadimage - Uploads a location image
     *
     * Use this endpoint to upload a location image. You must convert the image to a base64 encoded string
     * and pass that string as input along with your filename.
    **/
    postSetupV1LocationsIdUploadimage(req: operations.PostSetupV1LocationsIdUploadimageRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1LocationsIdUploadimageResponse>;
    /**
     * putSetupV1LocationsId - Use this endpoint to change the scope of online booking settings
     *
     * Use this endpoint to update a business location.
     *
     * The optional removeRegion query parameter is used to remove the region relationship from the location
     *
     * If the settings element is populated the scope will be set to location with the settings supplied, otherwise it will be company scope.
     *
     * If all your settings are uniform across all locations then do not pass settings and the location will use the settings
     * defined on the primary location. This is company scope. Settings cascade down to the locations. You can override any location
     * that needs different settings by providing settings in the update model.
    **/
    putSetupV1LocationsId(req: operations.PutSetupV1LocationsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1LocationsIdResponse>;
    /**
     * putSetupV1LocationsIdHolidaysHolidayIdClosed - Sets a business holiday to open or closed.
     *
     * Use this endpoint to set business holidays to open or closed.
     *
     * If you pass in an asterisk for the holidayId then all business holidays
     * will be set to the valaue
    **/
    putSetupV1LocationsIdHolidaysHolidayIdClosed(req: operations.PutSetupV1LocationsIdHolidaysHolidayIdClosedRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1LocationsIdHolidaysHolidayIdClosedResponse>;
    /**
     * putSetupV1LocationsIdRecover - Recovers a location object.
     *
     * Use this endpoint to recover a deleted business location.
    **/
    putSetupV1LocationsIdRecover(req: operations.PutSetupV1LocationsIdRecoverRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1LocationsIdRecoverResponse>;
    /**
     * putSetupV1LocationsIdSettingsScopeSettingsScope - Changes the scope of OnlineBooking Settings.
     *
     * Use this endpoint to update a business location.
     *
     * settingsScope values are 0 = company scope, 1 = business location scope
     * if you wish to inherit the online settings defined in the primary location then use value 0 for company scope.
     * Otherwise if you wish to override the settings for a specific location then use value = 1 for business location scope
     * ///
    **/
    putSetupV1LocationsIdSettingsScopeSettingsScope(req: operations.PutSetupV1LocationsIdSettingsScopeSettingsScopeRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1LocationsIdSettingsScopeSettingsScopeResponse>;
}
