package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunProjectsLocationsRevisionsListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public RunProjectsLocationsRevisionsListQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public RunProjectsLocationsRevisionsListQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public RunProjectsLocationsRevisionsListQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public RunProjectsLocationsRevisionsListQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=continue")
    public String continue_;
    public RunProjectsLocationsRevisionsListQueryParams withContinue(String continue_) {
        this.continue_ = continue_;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fieldSelector")
    public String fieldSelector;
    public RunProjectsLocationsRevisionsListQueryParams withFieldSelector(String fieldSelector) {
        this.fieldSelector = fieldSelector;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public RunProjectsLocationsRevisionsListQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeUninitialized")
    public Boolean includeUninitialized;
    public RunProjectsLocationsRevisionsListQueryParams withIncludeUninitialized(Boolean includeUninitialized) {
        this.includeUninitialized = includeUninitialized;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public RunProjectsLocationsRevisionsListQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=labelSelector")
    public String labelSelector;
    public RunProjectsLocationsRevisionsListQueryParams withLabelSelector(String labelSelector) {
        this.labelSelector = labelSelector;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public RunProjectsLocationsRevisionsListQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public RunProjectsLocationsRevisionsListQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public RunProjectsLocationsRevisionsListQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public RunProjectsLocationsRevisionsListQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resourceVersion")
    public String resourceVersion;
    public RunProjectsLocationsRevisionsListQueryParams withResourceVersion(String resourceVersion) {
        this.resourceVersion = resourceVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public RunProjectsLocationsRevisionsListQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public RunProjectsLocationsRevisionsListQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=watch")
    public Boolean watch;
    public RunProjectsLocationsRevisionsListQueryParams withWatch(Boolean watch) {
        this.watch = watch;
        return this;
    }
}