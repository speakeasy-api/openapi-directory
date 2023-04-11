import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Locations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Unlink Service
     *
     * @remarks
     * <p>Use this endpoint to <b>Unlink</b> a location service from a business location. A valid <b>locationService id</b> is required. Find location services by using the <i>GET  /setup /v1 /locations /{id} /services</i> endpoint. </p>
     */
    deleteSetupV1LocationsServicesId(req: operations.DeleteSetupV1LocationsServicesIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1LocationsServicesIdResponse>;
    /**
     * Delete Location
     *
     * @remarks
     * <p>Use this endpoint to <b>Delete</b> a business location. A valid business <b>location id</b> is required. The location is not permanently deleted and can be recovered by using the <i>PUT /setup /v1 /locations /{id} /recover</i> endpoint.</p>
     */
    deleteSetupV1LocationsId(req: operations.DeleteSetupV1LocationsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1LocationsIdResponse>;
    /**
     * Delete All Location Images
     *
     * @remarks
     * <p>Use this endpoint to <b>Delete All</b> location images from the location blob storage container. An option exists to use upper case for matching the subdirectory name. Legacy apps stored pics using upper case while the API uses lower case names.</p>
     */
    deleteSetupV1LocationsIdDeleteallimages(req: operations.DeleteSetupV1LocationsIdDeleteallimagesRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1LocationsIdDeleteallimagesResponse>;
    /**
     * Delete Location Image
     *
     * @remarks
     * <p>Use this endpoint to <b>Delete</b> a previously uploaded location image. A valid business <b>location id</b> is required.</p>
     */
    deleteSetupV1LocationsIdDeleteimage(req: operations.DeleteSetupV1LocationsIdDeleteimageRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1LocationsIdDeleteimageResponse>;
    /**
     * Delete Master Template Settings
     *
     * @remarks
     * <p>Use this endpoint to <b>Delete Custom Master Email Template Settings</b>. A valid business <b>location id</b> is required. Deleting a custom master email template will reactivate the original default OnSched template settings.</p>
     */
    deleteSetupV1LocationsIdEmailTemplatesMaster(req: operations.DeleteSetupV1LocationsIdEmailTemplatesMasterRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1LocationsIdEmailTemplatesMasterResponse>;
    /**
     * Delete Custom Template
     *
     * @remarks
     * <p>Use this endpoint to <b>Delete</b> a Custom Email Template that was previously created. A valid business <b>location id</b> and email <b>templateName</b> are required. Deleting a custom email template will revert the template back to its default originally created by OnSched. Changes will be reflected in all business locations associated with this company.</p>
     * <p>The email template endpoints work a little differently than most. When you delete you are deleting the custom template you created, and the original default Email Template created by OnSched will be reactivated.</p>
     */
    deleteSetupV1LocationsIdEmailTemplatesTemplateName(req: operations.DeleteSetupV1LocationsIdEmailTemplatesTemplateNameRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1LocationsIdEmailTemplatesTemplateNameResponse>;
    /**
     * Delete Google Cal Access
     *
     * @remarks
     * <p>Use this endpoint to <b>Delete</b> authorized access to all google calendar users in your organization. Upon deletion Google Calendars will no longer be synced for resources.</p>
     */
    deleteSetupV1LocationsIdGoogleServiceAccount(req: operations.DeleteSetupV1LocationsIdGoogleServiceAccountRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1LocationsIdGoogleServiceAccountResponse>;
    /**
     * Delete Linked Services
     *
     * @remarks
     * <p>Use this endpoint to <b>Delete All</b> location linked services from a business location. A valid business <b>location id</b> is required. </p>
     */
    deleteSetupV1LocationsIdServices(req: operations.DeleteSetupV1LocationsIdServicesRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1LocationsIdServicesResponse>;
    /**
     * List Locations
     *
     * @remarks
     * <p>Use this endpoint to <b>List Business Locations</b> associated with your company. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>
     * <p>
     *   <b>IMPORTANT DEPRECATION NOTICE</b>: The following online settings parameters were intended for internal use in our Portal application only. They will be deprecated on <b>OCTOBER 15, 2022</b>. These fields are currently part of the <b>SETTINGS</b> object in all location endpoints: <b>businessId, enabled, familyMembersEnabled, serviceLabel, resourceLabel, resourceAnyLabel, resourceSelection, liveMode, formFlow, availabilityForm, showServiceGroups, showOnSchedLogo, showBusinessLogo, disableAuthorization, hideNavBar, hideLocationNav, hideServiceGroupsNav, hideServicesNav, hideContinueBooking, returnToService, returnToAvailability, hideBreadCrumbNav.</b> If you are using these fields, please adjust your code to handle the deprecation or let us know by submitting a ticket to: <b><i>support@onsched.com</i></b> as we do not want to interrupt your existing workflows.</p>
     */
    getSetupV1Locations(req: operations.GetSetupV1LocationsRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1LocationsResponse>;
    /**
     * Get Linked Service
     *
     * @remarks
     * <p>Use this endpoint to <b>Get a Linked Service</b>. A valid <b>locationService id</b> is required.</p>
     */
    getSetupV1LocationsServicesId(req: operations.GetSetupV1LocationsServicesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1LocationsServicesIdResponse>;
    /**
     * Get Location
     *
     * @remarks
     * <p>Use this endpoint to return a <b>Location</b> object. A valid <b>location id</b> is required. If not specified, the business location defaults to the primary business location. Find all business location id's, by using the <i>GET /consumer/v1/locations</i> endpoint.</p>
     * <p>
     *   <b>IMPORTANT DEPRECATION NOTICE</b>: The following online settings parameters were intended for internal use in our Portal application only. They will be deprecated on <b>OCTOBER 15, 2022</b>. These fields are currently part of the <b>SETTINGS</b> object in all location endpoints: <b>businessId, enabled, familyMembersEnabled, serviceLabel, resourceLabel, resourceAnyLabel, resourceSelection, liveMode, formFlow, availabilityForm, showServiceGroups, showOnSchedLogo, showBusinessLogo, disableAuthorization, hideNavBar, hideLocationNav, hideServiceGroupsNav, hideServicesNav, hideContinueBooking, returnToService, returnToAvailability, hideBreadCrumbNav.</b> If you are using these fields, please adjust your code to handle the deprecation or let us know by submitting a ticket to: <b><i>support@onsched.com</i></b> as we do not want to interrupt your existing workflows.</p>
     */
    getSetupV1LocationsId(req: operations.GetSetupV1LocationsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1LocationsIdResponse>;
    /**
     * Get Reminders
     *
     * @remarks
     * <p>Use this endpoint to <b>Get Email and SMS appointment reminder settings</b> for the requested location. A valid business <b>location id</b> is required. </p>
     */
    getSetupV1LocationsIdAppointmentreminders(req: operations.GetSetupV1LocationsIdAppointmentremindersRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1LocationsIdAppointmentremindersResponse>;
    /**
     * List Email Templates
     *
     * @remarks
     * <p>Use this endpoint to return a <b>List of Email Templates</b> that are provided and may be customized. If the template has been customized, the customized property is true. The scope parameter indicates if the email template has been customized. This endpoint returns <b>only company level templates</b>, so the scope is always company.</p>
     */
    getSetupV1LocationsIdEmailTemplates(req: operations.GetSetupV1LocationsIdEmailTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1LocationsIdEmailTemplatesResponse>;
    /**
     * Get Master Template Settings
     *
     * @remarks
     * <p>Use this endpoint to get <b>Master Email Template Settings</b>. A valid business <b>location id</b> is required. Settings exist for showing or hiding panels and for changing color schemes. </p>
     */
    getSetupV1LocationsIdEmailTemplatesMaster(req: operations.GetSetupV1LocationsIdEmailTemplatesMasterRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1LocationsIdEmailTemplatesMasterResponse>;
    /**
     * Get Email Template
     *
     * @remarks
     * <p>Use this endpoint to return the requested <b>Email Template</b>. The template is from the primary business location. If it wasn't customized the default template is returned. The response content is in html format. A valid <b>emailTemplate name</b> is required. Find template names by using the <i>GET  /setup /v1 /locations /{id} /email /templates</i> endpoint. Note: The master template cannot be accessed here. </p>
     */
    getSetupV1LocationsIdEmailTemplatesTemplateName(req: operations.GetSetupV1LocationsIdEmailTemplatesTemplateNameRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1LocationsIdEmailTemplatesTemplateNameResponse>;
    /**
     * List Location Linked Services
     *
     * @remarks
     * <p>Use this endpoint to return a list of <b>Location Linked Services</b>. A valid business <b>location id</b> is required. By default, there are no location linked services attached to a location. Refer to the: <i>POST /setup /v1 /locations /{id} /services</i> for details. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>
     */
    getSetupV1LocationsIdServices(req: operations.GetSetupV1LocationsIdServicesRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1LocationsIdServicesResponse>;
    /**
     * Create Location
     *
     * @remarks
     * <p>Use this endpoint to <b>Create</b> a new business location. The result is a business location object with a GUID assigned to the location.</p>
     * <p>The <b>name</b> and <b>timezoneName</b> fields are required. The <b>timezoneName</b> must be expressed as an IANA Timezone e.g., <i>America/New_York</i>. Refer to: <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones">Timezone Wiki</a> for a listing of IANA time zones.</p>
     * <p>
     *   <b>Business hours</b> are set by defining the <b>startTime</b> and <b>endTime</b> values for each day available/open. All days of the week must be provided when setting availability. Days are defined as <b>sun, mon, tue, wed, thu, fri and sat</b>. Start and End Times are entered in <b>military format. e.g., 800 is 8:00am, 2230 is 10:30pm</b>. If there is no physical location and the business hours are irrelevant, set the hours to open 24 hours by setting startTime=0 and endTime=2400. To set a whole day as unavailable, set both the startTime and endTime to 0. </p>
     * <p>
     *   <b>Settings</b> can be set here. Booking timer minutes, book ahead restrictions and customer bookings per day are all available here. Please read about the settings scope parameter before setting these values as it may simplify your process.</p>
     * <p>
     *   <b>Settings Scope</b> can be set to the company or the business location level. You can have all locations use the same company level settings or individual business locations can define their own, business location scope. If you want to use the company settings throughout all locations, do not pass in <b>settings element</b>. To create business location scoped settings, pass in the <b>settings element</b> with the field values defined in the post body. </p>
     * <p>
     *   <b>Appointment Reminders</b> Reminder values are used to define how many hours, days, or weeks (interval value) prior to the appointment to send the reminder. <b>Interval</b> values are used to define the reminder interval: <b>1 = Hours</b>, <b>2 = Days</b> and <b>3 = Weeks</b>. The reminder fields are numbers. If you are using the hours interval, use a number from 1 to 24.</p>
     * <p>Example 1: <b>emailFirstReminder:  1, emailFirstReminderInterval:  2</b> - results in 1st reminder being sent <b>1 Day before</b> the appointment time.</p>
     * <p>Example 2: <b>emailSecondReminder: 3, emailSecondReminderInterval: 1</b> - results in 2nd reminder being sent <b>3 Hours before</b> the appointment time.</p>
     * <p>
     *   <b>IMPORTANT DEPRECATION NOTICE</b>: The following online settings parameters were intended for internal use in our Portal application only. They will be deprecated on <b>OCTOBER 15, 2022</b>. These fields are currently part of the <b>SETTINGS</b> object in all location endpoints: <b>businessId, enabled, familyMembersEnabled, serviceLabel, resourceLabel, resourceAnyLabel, resourceSelection, liveMode, formFlow, availabilityForm, showServiceGroups, showOnSchedLogo, showBusinessLogo, disableAuthorization, hideNavBar, hideLocationNav, hideServiceGroupsNav, hideServicesNav, hideContinueBooking, returnToService, returnToAvailability, hideBreadCrumbNav.</b> If you are using these fields, please adjust your code to handle the deprecation or let us know by submitting a ticket to: <b><i>support@onsched.com</i></b> as we do not want to interrupt your existing workflows.</p>
     */
    postSetupV1Locations(req: shared.LocationInputModel, config?: AxiosRequestConfig): Promise<operations.PostSetupV1LocationsResponse>;
    /**
     * Create Locations Bulk
     *
     * @remarks
     * <p>Use this endpoint to <b>Create Bulk</b> business locations. The posted list of locations cannot exceed 100 location objects per transaction for performance purposes. The result is a list of new business location objects with a GUID assigned to each location.</p>
     * <p>The <b>name</b> and <b>timezoneName</b> fields are required. The <b>timezoneName</b> must be expressed as an IANA Timezone e.g., <i>America/New_York</i>. Refer to: <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones">Timezone Wiki</a> for a listing of IANA time zones.</p>
     * <p>
     *   <b>Business hours</b> are set by defining the <b>startTime</b> and <b>endTime</b> values for each day available/open. All days of the week must be provided when setting availability. Days are defined as <b>sun, mon, tue, wed, thu, fri and sat</b>. Start and End Times are entered in <b>military format. e.g., 800 is 8:00am, 2230 is 10:30pm</b>. If there is no physical location and the business hours are irrelevant, set the hours to open 24 hours by setting startTime=0 and endTime=2400. To set a whole day as unavailable, set both the startTime and endTime to 0. </p>
     * <p>
     *   <b>Settings</b> can be set here. Booking timer minutes, book ahead restrictions and customer bookings per day are all available here. Please read about the settings scope parameter before setting these values as it may simplify your process.</p>
     * <p>
     *   <b>Settings Scope</b> can be set to the company or the business location level. You can have all locations use the same company level settings or individual business locations can define their own, business location scope. If you want to use the company settings throughout all locations, do not pass in <b>settings element</b>. To create business location scoped settings, pass in the <b>settings element</b> with the field values defined in the post body. </p>
     * <p>
     *   <b>Appointment Reminders</b> Reminder values are used to define how many hours, days, or weeks (interval value) prior to the appointment to send the reminder. <b>Interval</b> values are used to define the reminder interval: <b>1 = Hours</b>, <b>2 = Days</b> and <b>3 = Weeks</b>. The reminder fields are numbers. If you are using the hours interval, use a number from 1 to 24.</p>
     * <p>Example 1: <b>emailFirstReminder:  1, emailFirstReminderInterval:  2</b> - results in 1st reminder being sent <b>1 Day before</b> the appointment time.</p>
     * <p>Example 2: <b>emailSecondReminder: 3, emailSecondReminderInterval: 1</b> - results in 2nd reminder being sent <b>3 Hours before</b> the appointment time.</p>
     * <p>
     *   <b>IMPORTANT DEPRECATION NOTICE</b>: The following online settings parameters were intended for internal use in our Portal application only. They will be deprecated on <b>OCTOBER 15, 2022</b>. These fields are currently part of the <b>SETTINGS</b> object in all location endpoints: <b>businessId, enabled, familyMembersEnabled, serviceLabel, resourceLabel, resourceAnyLabel, resourceSelection, liveMode, formFlow, availabilityForm, showServiceGroups, showOnSchedLogo, showBusinessLogo, disableAuthorization, hideNavBar, hideLocationNav, hideServiceGroupsNav, hideServicesNav, hideContinueBooking, returnToService, returnToAvailability, hideBreadCrumbNav.</b> If you are using these fields, please adjust your code to handle the deprecation or let us know by submitting a ticket to: <b><i>support@onsched.com</i></b> as we do not want to interrupt your existing workflows.</p>
     */
    postSetupV1LocationsBulk(req: shared.LocationsInputModel, config?: AxiosRequestConfig): Promise<operations.PostSetupV1LocationsBulkResponse>;
    /**
     * Create Custom Template
     *
     * @remarks
     * <p>Use this endpoint to a <b>Create</b> a Custom Email Template. You must convert the content to a base64 encoded string. Updates to the primary business location create company scoped custom templates. Updates to non-primary business locations create business location scoped custom templates. The master template cannot be updated with this endpoint.</p>
     * <p>The email template endpoints work a little differently than most. There are no endpoints to update the templates, we use the post endpoint to create a custom template instead. This endpoint creates a new email template that will be used instead. If you delete it, you are deleting the custom template you created and the original default template created by OnSched will be reactivated.</p>
     */
    postSetupV1LocationsIdEmailTemplates(req: operations.PostSetupV1LocationsIdEmailTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1LocationsIdEmailTemplatesResponse>;
    /**
     * Create Master Template Settings
     *
     * @remarks
     * <p>Use this endpoint to <b>Create Custom Master Email Template Settings</b>. A valid business <b>location id</b> is required. Settings exist for showing or hiding email panels and for changing color schemes. Use the <i>GET  /setup /v1 /locations /{id} /email /templates /masterSettings</i> endpoint to display the settings offered. Changes to the Master Template Settings will be reflected in all business locations associated with this company. </p>
     * <p>The email template endpoints work a little differently than most. There are no endpoints to update the templates, we use the post endpoint to create a custom template instead. This endpoint creates a new custom Master Template Settings file that will be used instead. If you delete it, you are deleting the custom template settings you created and the original default Master Template created by OnSched would be reactivated.</p>
     */
    postSetupV1LocationsIdEmailTemplatesMaster(req: operations.PostSetupV1LocationsIdEmailTemplatesMasterRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1LocationsIdEmailTemplatesMasterResponse>;
    /**
     * Create Google Cal Access
     *
     * @remarks
     * <p>Use this endpoint to <b>Authorize Access</b> to google calendar users in your organization. You must create/have a Google Service account as an admin of your GSuite, then save the credentials as a Json Key file. This <b>Json Key</b> and a valid business <b>location id</b> are required. </p>
     */
    postSetupV1LocationsIdGoogleServiceAccount(req: operations.PostSetupV1LocationsIdGoogleServiceAccountRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1LocationsIdGoogleServiceAccountResponse>;
    /**
     * Create Linked Service
     *
     * @remarks
     * <p>Use this endpoint to <b>Link Services</b> to a location object. A valid business <b>location id</b> is required. By default, there are <i>no services linked</i> to a location. </p>
     * <p>Services are definable globally at the Company level and associated with the Primary Business Location, or at a Secondary Business Location. When accessing the Services endpoints, by default, API consumers are provided with a <b>combined</b> list of Services defined from both the Primary and Secondary Business Location.</p>
     * <p>If necessary, the list of Service(s) provided can be cherry-picked/linked to <b>only include specific Service(s)</b> by using this endpoint. This allows for a subset of defined Services to be provided for a location.</p>
     * <p>Supplying the list of services ids to cherry-pick/link to the location in the request body will explicitly define which Primary Location Services are offered by the specified business location.</p>
     */
    postSetupV1LocationsIdServices(req: operations.PostSetupV1LocationsIdServicesRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1LocationsIdServicesResponse>;
    /**
     * Upload Location Image
     *
     * @remarks
     * <p>Use this endpoint to <b>Upload</b> an image to a location object. A valid business <b>location id</b> is required. You must convert the image to a <b>base64 encoded string</b> and pass that string as input along with your <b>filename</b>.</p>
     */
    postSetupV1LocationsIdUploadimage(req: operations.PostSetupV1LocationsIdUploadimageRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1LocationsIdUploadimageResponse>;
    /**
     * Update Location
     *
     * @remarks
     * <p>Use this endpoint to <b>Update</b> a business location object. A valid business <b>location id</b> is required. The optional removeRegion query parameter can be used to remove the region relationship from the location.</p>
     * <p>If the settings element is populated the scope will be set to the business location with the settings supplied. If your settings are uniform across all locations, then do not supply the settings element and the location will use the settings defined on the primary business location (company scoped). Company scoped settings cascade down to the locations. You can override any location that needs different settings by providing settings in the update model. Use the <i>PUT /setup/v1/locations/{id}/settings/scope/{settingsScope}</i> endpoint to change the settings scope only. This is typically used when switching from business location scope back to company.</p>
     * <p>Refer to: <i><b>POST  /setup /v1 /locations</b></i> endpoint for details.</p>
     */
    putSetupV1LocationsId(req: operations.PutSetupV1LocationsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1LocationsIdResponse>;
    /**
     * Update Reminders
     *
     * @remarks
     * <p>Use this endpoint to <b>Update</b> Email and SMS appointment reminder settings for the requested location. A valid business <b>location id</b> is required. </p>
     * <p>
     *   <b>Appointment Reminders</b> Reminder values are used to define how many hours, days, or weeks (interval value) prior to the appointment to send the reminder. <b>Interval</b> values are used to define the reminder interval: <b>1 = Hours</b>, <b>2 = Days</b> and <b>3 = Weeks</b>. The reminder fields are numbers. If you are using the hours interval, use a number from 1 to 24.</p>
     * <p>Example 1: <b>emailFirstReminder:  1, emailFirstReminderInterval:  2</b> - results in 1st reminder being sent <b>1 Day before</b> the appointment time.</p>
     * <p>Example 2: <b>emailSecondReminder: 3, emailSecondReminderInterval: 1</b> - results in 2nd reminder being sent <b>3 Hours before</b> the appointment time.</p>
     */
    putSetupV1LocationsIdAppointmentreminders(req: operations.PutSetupV1LocationsIdAppointmentremindersRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1LocationsIdAppointmentremindersResponse>;
    /**
     * Update Location Holidays
     *
     * @remarks
     * <p>Use this endpoint to <b>Update</b> Business Holidays as Opened or Closed. A valid business <b>location id</b> is required. If not specified, the business location defaults to the primary business location.</p>
     * <p>Holidays are automatically defined with the initial Post Location endpoint and are based on country code. Find your location holiday codes by using the: <i>GET /setup /v1 /locations /{id}</i> endpoint. Change your holidays to open or closed by passing in the <b>holidayId</b> along with the <b>closed</b> boolean value to change the status of a specific holiday. Pass in an <b>asterisk *</b> for the holidayId then all business holidays will be set as defined.</p>
     */
    putSetupV1LocationsIdHolidaysHolidayIdClosed(req: operations.PutSetupV1LocationsIdHolidaysHolidayIdClosedRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1LocationsIdHolidaysHolidayIdClosedResponse>;
    /**
     * Recover Location
     *
     * @remarks
     * <p>Use this endpoint to <b>Recover</b> a deleted business location. A valid business <b>location id</b> is required.</p>
     */
    putSetupV1LocationsIdRecover(req: operations.PutSetupV1LocationsIdRecoverRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1LocationsIdRecoverResponse>;
    /**
     * Update Location Scope
     *
     * @remarks
     * <p>Use this endpoint to <b>Update</b> a business locations online booking settings scope. A valid business <b>location id</b> is required.</p>
     * <p>
     *   <b>settingsScope</b> values are <b>0 = company scope, 1 = business location scope</b>. To inherit the online settings defined in the primary business location, then use value = 0 for company scope. Otherwise, to override the settings for a specific location then use value = 1 for business location scope. <b>Note</b>: You cannot change the settings scope of the Primary Business Location.</p>
     */
    putSetupV1LocationsIdSettingsScopeSettingsScope(req: operations.PutSetupV1LocationsIdSettingsScopeSettingsScopeRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1LocationsIdSettingsScopeSettingsScopeResponse>;
}
