package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunNamespacesJobsListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public RunNamespacesJobsListQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public RunNamespacesJobsListQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public RunNamespacesJobsListQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public RunNamespacesJobsListQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=continue")
    public String continue_;
    public RunNamespacesJobsListQueryParams withContinue(String continue_) {
        this.continue_ = continue_;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fieldSelector")
    public String fieldSelector;
    public RunNamespacesJobsListQueryParams withFieldSelector(String fieldSelector) {
        this.fieldSelector = fieldSelector;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public RunNamespacesJobsListQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeUninitialized")
    public Boolean includeUninitialized;
    public RunNamespacesJobsListQueryParams withIncludeUninitialized(Boolean includeUninitialized) {
        this.includeUninitialized = includeUninitialized;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public RunNamespacesJobsListQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=labelSelector")
    public String labelSelector;
    public RunNamespacesJobsListQueryParams withLabelSelector(String labelSelector) {
        this.labelSelector = labelSelector;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public RunNamespacesJobsListQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public RunNamespacesJobsListQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public RunNamespacesJobsListQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public RunNamespacesJobsListQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resourceVersion")
    public String resourceVersion;
    public RunNamespacesJobsListQueryParams withResourceVersion(String resourceVersion) {
        this.resourceVersion = resourceVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public RunNamespacesJobsListQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public RunNamespacesJobsListQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=watch")
    public Boolean watch;
    public RunNamespacesJobsListQueryParams withWatch(Boolean watch) {
        this.watch = watch;
        return this;
    }
}