package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=monitoredResourceContainer")
    public String monitoredResourceContainer;
    public MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryParams withMonitoredResourceContainer(String monitoredResourceContainer) {
        this.monitoredResourceContainer = monitoredResourceContainer;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
}