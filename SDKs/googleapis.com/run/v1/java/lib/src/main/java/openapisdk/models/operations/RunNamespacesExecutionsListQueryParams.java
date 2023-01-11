package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunNamespacesExecutionsListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public RunNamespacesExecutionsListQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public RunNamespacesExecutionsListQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public RunNamespacesExecutionsListQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public RunNamespacesExecutionsListQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=continue")
    public String continue_;
    public RunNamespacesExecutionsListQueryParams withContinue(String continue_) {
        this.continue_ = continue_;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fieldSelector")
    public String fieldSelector;
    public RunNamespacesExecutionsListQueryParams withFieldSelector(String fieldSelector) {
        this.fieldSelector = fieldSelector;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public RunNamespacesExecutionsListQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeUninitialized")
    public Boolean includeUninitialized;
    public RunNamespacesExecutionsListQueryParams withIncludeUninitialized(Boolean includeUninitialized) {
        this.includeUninitialized = includeUninitialized;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public RunNamespacesExecutionsListQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=labelSelector")
    public String labelSelector;
    public RunNamespacesExecutionsListQueryParams withLabelSelector(String labelSelector) {
        this.labelSelector = labelSelector;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public RunNamespacesExecutionsListQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public RunNamespacesExecutionsListQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public RunNamespacesExecutionsListQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public RunNamespacesExecutionsListQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resourceVersion")
    public String resourceVersion;
    public RunNamespacesExecutionsListQueryParams withResourceVersion(String resourceVersion) {
        this.resourceVersion = resourceVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public RunNamespacesExecutionsListQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public RunNamespacesExecutionsListQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=watch")
    public Boolean watch;
    public RunNamespacesExecutionsListQueryParams withWatch(Boolean watch) {
        this.watch = watch;
        return this;
    }
}