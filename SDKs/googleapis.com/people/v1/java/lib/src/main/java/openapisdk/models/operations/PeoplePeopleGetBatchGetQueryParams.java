package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PeoplePeopleGetBatchGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public PeoplePeopleGetBatchGetQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public PeoplePeopleGetBatchGetQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public PeoplePeopleGetBatchGetQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public PeoplePeopleGetBatchGetQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public PeoplePeopleGetBatchGetQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public PeoplePeopleGetBatchGetQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public PeoplePeopleGetBatchGetQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=personFields")
    public String personFields;
    public PeoplePeopleGetBatchGetQueryParams withPersonFields(String personFields) {
        this.personFields = personFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public PeoplePeopleGetBatchGetQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public PeoplePeopleGetBatchGetQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=requestMask.includeField")
    public String requestMaskIncludeField;
    public PeoplePeopleGetBatchGetQueryParams withRequestMaskIncludeField(String requestMaskIncludeField) {
        this.requestMaskIncludeField = requestMaskIncludeField;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resourceNames")
    public String[] resourceNames;
    public PeoplePeopleGetBatchGetQueryParams withResourceNames(String[] resourceNames) {
        this.resourceNames = resourceNames;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sources")
    public PeoplePeopleGetBatchGetSourcesEnum[] sources;
    public PeoplePeopleGetBatchGetQueryParams withSources(PeoplePeopleGetBatchGetSourcesEnum[] sources) {
        this.sources = sources;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public PeoplePeopleGetBatchGetQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public PeoplePeopleGetBatchGetQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
}