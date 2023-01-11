package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BooksMylibraryAnnotationsListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public BooksMylibraryAnnotationsListQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public BooksMylibraryAnnotationsListQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public BooksMylibraryAnnotationsListQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public BooksMylibraryAnnotationsListQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=contentVersion")
    public String contentVersion;
    public BooksMylibraryAnnotationsListQueryParams withContentVersion(String contentVersion) {
        this.contentVersion = contentVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public BooksMylibraryAnnotationsListQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public BooksMylibraryAnnotationsListQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=layerId")
    public String layerId;
    public BooksMylibraryAnnotationsListQueryParams withLayerId(String layerId) {
        this.layerId = layerId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=layerIds")
    public String[] layerIds;
    public BooksMylibraryAnnotationsListQueryParams withLayerIds(String[] layerIds) {
        this.layerIds = layerIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public BooksMylibraryAnnotationsListQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public BooksMylibraryAnnotationsListQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageToken")
    public String pageToken;
    public BooksMylibraryAnnotationsListQueryParams withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public BooksMylibraryAnnotationsListQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public BooksMylibraryAnnotationsListQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=showDeleted")
    public Boolean showDeleted;
    public BooksMylibraryAnnotationsListQueryParams withShowDeleted(Boolean showDeleted) {
        this.showDeleted = showDeleted;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=source")
    public String source;
    public BooksMylibraryAnnotationsListQueryParams withSource(String source) {
        this.source = source;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updatedMax")
    public String updatedMax;
    public BooksMylibraryAnnotationsListQueryParams withUpdatedMax(String updatedMax) {
        this.updatedMax = updatedMax;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updatedMin")
    public String updatedMin;
    public BooksMylibraryAnnotationsListQueryParams withUpdatedMin(String updatedMin) {
        this.updatedMin = updatedMin;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public BooksMylibraryAnnotationsListQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public BooksMylibraryAnnotationsListQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=volumeId")
    public String volumeId;
    public BooksMylibraryAnnotationsListQueryParams withVolumeId(String volumeId) {
        this.volumeId = volumeId;
        return this;
    }
}