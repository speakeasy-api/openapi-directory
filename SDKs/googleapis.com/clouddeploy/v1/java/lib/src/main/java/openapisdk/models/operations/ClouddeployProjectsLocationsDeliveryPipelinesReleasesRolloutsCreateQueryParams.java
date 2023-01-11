package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=requestId")
    public String requestId;
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateQueryParams withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rolloutId")
    public String rolloutId;
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateQueryParams withRolloutId(String rolloutId) {
        this.rolloutId = rolloutId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=validateOnly")
    public Boolean validateOnly;
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateQueryParams withValidateOnly(Boolean validateOnly) {
        this.validateOnly = validateOnly;
        return this;
    }
}