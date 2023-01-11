package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudassetProjectsBatchGetAssetsHistoryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public CloudassetProjectsBatchGetAssetsHistoryQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public CloudassetProjectsBatchGetAssetsHistoryQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public CloudassetProjectsBatchGetAssetsHistoryQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=assetNames")
    public String[] assetNames;
    public CloudassetProjectsBatchGetAssetsHistoryQueryParams withAssetNames(String[] assetNames) {
        this.assetNames = assetNames;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public CloudassetProjectsBatchGetAssetsHistoryQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=contentType")
    public CloudassetProjectsBatchGetAssetsHistoryContentTypeEnum contentType;
    public CloudassetProjectsBatchGetAssetsHistoryQueryParams withContentType(CloudassetProjectsBatchGetAssetsHistoryContentTypeEnum contentType) {
        this.contentType = contentType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public CloudassetProjectsBatchGetAssetsHistoryQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public CloudassetProjectsBatchGetAssetsHistoryQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public CloudassetProjectsBatchGetAssetsHistoryQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public CloudassetProjectsBatchGetAssetsHistoryQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public CloudassetProjectsBatchGetAssetsHistoryQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=readTimeWindow.endTime")
    public String readTimeWindowEndTime;
    public CloudassetProjectsBatchGetAssetsHistoryQueryParams withReadTimeWindowEndTime(String readTimeWindowEndTime) {
        this.readTimeWindowEndTime = readTimeWindowEndTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=readTimeWindow.startTime")
    public String readTimeWindowStartTime;
    public CloudassetProjectsBatchGetAssetsHistoryQueryParams withReadTimeWindowStartTime(String readTimeWindowStartTime) {
        this.readTimeWindowStartTime = readTimeWindowStartTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public CloudassetProjectsBatchGetAssetsHistoryQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public CloudassetProjectsBatchGetAssetsHistoryQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
}