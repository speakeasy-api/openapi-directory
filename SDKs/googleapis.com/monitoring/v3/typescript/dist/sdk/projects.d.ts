import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a new alerting policy.Design your application to single-thread API calls that modify the state of alerting policies in a single project. This includes calls to CreateAlertPolicy, DeleteAlertPolicy and UpdateAlertPolicy.
     */
    monitoringProjectsAlertPoliciesCreate(req: operations.MonitoringProjectsAlertPoliciesCreateRequest, security: operations.MonitoringProjectsAlertPoliciesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.MonitoringProjectsAlertPoliciesCreateResponse>;
    /**
     * Lists the existing alerting policies for the workspace.
     */
    monitoringProjectsAlertPoliciesList(req: operations.MonitoringProjectsAlertPoliciesListRequest, security: operations.MonitoringProjectsAlertPoliciesListSecurity, config?: AxiosRequestConfig): Promise<operations.MonitoringProjectsAlertPoliciesListResponse>;
    /**
     * Cloud Monitoring Agent only: Creates a new time series.This method is only for use by the Cloud Monitoring Agent. Use projects.timeSeries.create instead.
     */
    monitoringProjectsCollectdTimeSeriesCreate(req: operations.MonitoringProjectsCollectdTimeSeriesCreateRequest, security: operations.MonitoringProjectsCollectdTimeSeriesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.MonitoringProjectsCollectdTimeSeriesCreateResponse>;
    /**
     * Creates a new group.
     */
    monitoringProjectsGroupsCreate(req: operations.MonitoringProjectsGroupsCreateRequest, security: operations.MonitoringProjectsGroupsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.MonitoringProjectsGroupsCreateResponse>;
    /**
     * Lists the existing groups.
     */
    monitoringProjectsGroupsList(req: operations.MonitoringProjectsGroupsListRequest, security: operations.MonitoringProjectsGroupsListSecurity, config?: AxiosRequestConfig): Promise<operations.MonitoringProjectsGroupsListResponse>;
    /**
     * Lists the monitored resources that are members of a group.
     */
    monitoringProjectsGroupsMembersList(req: operations.MonitoringProjectsGroupsMembersListRequest, security: operations.MonitoringProjectsGroupsMembersListSecurity, config?: AxiosRequestConfig): Promise<operations.MonitoringProjectsGroupsMembersListResponse>;
    /**
     * Updates an existing group. You can change any group attributes except name.
     */
    monitoringProjectsGroupsUpdate(req: operations.MonitoringProjectsGroupsUpdateRequest, security: operations.MonitoringProjectsGroupsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.MonitoringProjectsGroupsUpdateResponse>;
    /**
     * Creates a new metric descriptor. The creation is executed asynchronously. User-created metric descriptors define custom metrics (https://cloud.google.com/monitoring/custom-metrics). The metric descriptor is updated if it already exists, except that metric labels are never removed.
     */
    monitoringProjectsMetricDescriptorsCreate(req: operations.MonitoringProjectsMetricDescriptorsCreateRequest, security: operations.MonitoringProjectsMetricDescriptorsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.MonitoringProjectsMetricDescriptorsCreateResponse>;
    /**
     * Lists metric descriptors that match a filter.
     */
    monitoringProjectsMetricDescriptorsList(req: operations.MonitoringProjectsMetricDescriptorsListRequest, security: operations.MonitoringProjectsMetricDescriptorsListSecurity, config?: AxiosRequestConfig): Promise<operations.MonitoringProjectsMetricDescriptorsListResponse>;
    /**
     * Lists monitored resource descriptors that match a filter.
     */
    monitoringProjectsMonitoredResourceDescriptorsList(req: operations.MonitoringProjectsMonitoredResourceDescriptorsListRequest, security: operations.MonitoringProjectsMonitoredResourceDescriptorsListSecurity, config?: AxiosRequestConfig): Promise<operations.MonitoringProjectsMonitoredResourceDescriptorsListResponse>;
    /**
     * Lists the descriptors for supported channel types. The use of descriptors makes it possible for new channel types to be dynamically added.
     */
    monitoringProjectsNotificationChannelDescriptorsList(req: operations.MonitoringProjectsNotificationChannelDescriptorsListRequest, security: operations.MonitoringProjectsNotificationChannelDescriptorsListSecurity, config?: AxiosRequestConfig): Promise<operations.MonitoringProjectsNotificationChannelDescriptorsListResponse>;
    /**
     * Creates a new notification channel, representing a single notification endpoint such as an email address, SMS number, or PagerDuty service.Design your application to single-thread API calls that modify the state of notification channels in a single project. This includes calls to CreateNotificationChannel, DeleteNotificationChannel and UpdateNotificationChannel.
     */
    monitoringProjectsNotificationChannelsCreate(req: operations.MonitoringProjectsNotificationChannelsCreateRequest, security: operations.MonitoringProjectsNotificationChannelsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.MonitoringProjectsNotificationChannelsCreateResponse>;
    /**
     * Requests a verification code for an already verified channel that can then be used in a call to VerifyNotificationChannel() on a different channel with an equivalent identity in the same or in a different project. This makes it possible to copy a channel between projects without requiring manual reverification of the channel. If the channel is not in the verified state, this method will fail (in other words, this may only be used if the SendNotificationChannelVerificationCode and VerifyNotificationChannel paths have already been used to put the given channel into the verified state).There is no guarantee that the verification codes returned by this method will be of a similar structure or form as the ones that are delivered to the channel via SendNotificationChannelVerificationCode; while VerifyNotificationChannel() will recognize both the codes delivered via SendNotificationChannelVerificationCode() and returned from GetNotificationChannelVerificationCode(), it is typically the case that the verification codes delivered via SendNotificationChannelVerificationCode() will be shorter and also have a shorter expiration (e.g. codes such as "G-123456") whereas GetVerificationCode() will typically return a much longer, websafe base 64 encoded string that has a longer expiration time.
     */
    monitoringProjectsNotificationChannelsGetVerificationCode(req: operations.MonitoringProjectsNotificationChannelsGetVerificationCodeRequest, security: operations.MonitoringProjectsNotificationChannelsGetVerificationCodeSecurity, config?: AxiosRequestConfig): Promise<operations.MonitoringProjectsNotificationChannelsGetVerificationCodeResponse>;
    /**
     * Lists the notification channels that have been created for the project.
     */
    monitoringProjectsNotificationChannelsList(req: operations.MonitoringProjectsNotificationChannelsListRequest, security: operations.MonitoringProjectsNotificationChannelsListSecurity, config?: AxiosRequestConfig): Promise<operations.MonitoringProjectsNotificationChannelsListResponse>;
    /**
     * Causes a verification code to be delivered to the channel. The code can then be supplied in VerifyNotificationChannel to verify the channel.
     */
    monitoringProjectsNotificationChannelsSendVerificationCode(req: operations.MonitoringProjectsNotificationChannelsSendVerificationCodeRequest, security: operations.MonitoringProjectsNotificationChannelsSendVerificationCodeSecurity, config?: AxiosRequestConfig): Promise<operations.MonitoringProjectsNotificationChannelsSendVerificationCodeResponse>;
    /**
     * Verifies a NotificationChannel by proving receipt of the code delivered to the channel as a result of calling SendNotificationChannelVerificationCode.
     */
    monitoringProjectsNotificationChannelsVerify(req: operations.MonitoringProjectsNotificationChannelsVerifyRequest, security: operations.MonitoringProjectsNotificationChannelsVerifySecurity, config?: AxiosRequestConfig): Promise<operations.MonitoringProjectsNotificationChannelsVerifyResponse>;
    /**
     * Creates a Snooze that will prevent alerts, which match the provided criteria, from being opened. The Snooze applies for a specific time interval.
     */
    monitoringProjectsSnoozesCreate(req: operations.MonitoringProjectsSnoozesCreateRequest, security: operations.MonitoringProjectsSnoozesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.MonitoringProjectsSnoozesCreateResponse>;
    /**
     * Lists the Snoozes associated with a project. Can optionally pass in filter, which specifies predicates to match Snoozes.
     */
    monitoringProjectsSnoozesList(req: operations.MonitoringProjectsSnoozesListRequest, security: operations.MonitoringProjectsSnoozesListSecurity, config?: AxiosRequestConfig): Promise<operations.MonitoringProjectsSnoozesListResponse>;
    /**
     * Creates or adds data to one or more time series. The response is empty if all time series in the request were written. If any time series could not be written, a corresponding failure message is included in the error response.
     */
    monitoringProjectsTimeSeriesCreate(req: operations.MonitoringProjectsTimeSeriesCreateRequest, security: operations.MonitoringProjectsTimeSeriesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.MonitoringProjectsTimeSeriesCreateResponse>;
    /**
     * Creates or adds data to one or more service time series. A service time series is a time series for a metric from a Google Cloud service. The response is empty if all time series in the request were written. If any time series could not be written, a corresponding failure message is included in the error response. This endpoint rejects writes to user-defined metrics. This method is only for use by Google Cloud services. Use projects.timeSeries.create instead.
     */
    monitoringProjectsTimeSeriesCreateService(req: operations.MonitoringProjectsTimeSeriesCreateServiceRequest, security: operations.MonitoringProjectsTimeSeriesCreateServiceSecurity, config?: AxiosRequestConfig): Promise<operations.MonitoringProjectsTimeSeriesCreateServiceResponse>;
    /**
     * Lists time series that match a filter.
     */
    monitoringProjectsTimeSeriesList(req: operations.MonitoringProjectsTimeSeriesListRequest, security: operations.MonitoringProjectsTimeSeriesListSecurity, config?: AxiosRequestConfig): Promise<operations.MonitoringProjectsTimeSeriesListResponse>;
    /**
     * Queries time series using Monitoring Query Language.
     */
    monitoringProjectsTimeSeriesQuery(req: operations.MonitoringProjectsTimeSeriesQueryRequest, security: operations.MonitoringProjectsTimeSeriesQuerySecurity, config?: AxiosRequestConfig): Promise<operations.MonitoringProjectsTimeSeriesQueryResponse>;
    /**
     * Creates a new Uptime check configuration.
     */
    monitoringProjectsUptimeCheckConfigsCreate(req: operations.MonitoringProjectsUptimeCheckConfigsCreateRequest, security: operations.MonitoringProjectsUptimeCheckConfigsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.MonitoringProjectsUptimeCheckConfigsCreateResponse>;
    /**
     * Lists the existing valid Uptime check configurations for the project (leaving out any invalid configurations).
     */
    monitoringProjectsUptimeCheckConfigsList(req: operations.MonitoringProjectsUptimeCheckConfigsListRequest, security: operations.MonitoringProjectsUptimeCheckConfigsListSecurity, config?: AxiosRequestConfig): Promise<operations.MonitoringProjectsUptimeCheckConfigsListResponse>;
}
