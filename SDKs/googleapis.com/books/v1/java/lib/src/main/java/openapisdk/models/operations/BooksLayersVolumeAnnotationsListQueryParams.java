package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BooksLayersVolumeAnnotationsListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public BooksLayersVolumeAnnotationsListQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public BooksLayersVolumeAnnotationsListQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public BooksLayersVolumeAnnotationsListQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public BooksLayersVolumeAnnotationsListQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=contentVersion")
    public String contentVersion;
    public BooksLayersVolumeAnnotationsListQueryParams withContentVersion(String contentVersion) {
        this.contentVersion = contentVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endOffset")
    public String endOffset;
    public BooksLayersVolumeAnnotationsListQueryParams withEndOffset(String endOffset) {
        this.endOffset = endOffset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endPosition")
    public String endPosition;
    public BooksLayersVolumeAnnotationsListQueryParams withEndPosition(String endPosition) {
        this.endPosition = endPosition;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public BooksLayersVolumeAnnotationsListQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public BooksLayersVolumeAnnotationsListQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locale")
    public String locale;
    public BooksLayersVolumeAnnotationsListQueryParams withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public BooksLayersVolumeAnnotationsListQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public BooksLayersVolumeAnnotationsListQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageToken")
    public String pageToken;
    public BooksLayersVolumeAnnotationsListQueryParams withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public BooksLayersVolumeAnnotationsListQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public BooksLayersVolumeAnnotationsListQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=showDeleted")
    public Boolean showDeleted;
    public BooksLayersVolumeAnnotationsListQueryParams withShowDeleted(Boolean showDeleted) {
        this.showDeleted = showDeleted;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=source")
    public String source;
    public BooksLayersVolumeAnnotationsListQueryParams withSource(String source) {
        this.source = source;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startOffset")
    public String startOffset;
    public BooksLayersVolumeAnnotationsListQueryParams withStartOffset(String startOffset) {
        this.startOffset = startOffset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startPosition")
    public String startPosition;
    public BooksLayersVolumeAnnotationsListQueryParams withStartPosition(String startPosition) {
        this.startPosition = startPosition;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updatedMax")
    public String updatedMax;
    public BooksLayersVolumeAnnotationsListQueryParams withUpdatedMax(String updatedMax) {
        this.updatedMax = updatedMax;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updatedMin")
    public String updatedMin;
    public BooksLayersVolumeAnnotationsListQueryParams withUpdatedMin(String updatedMin) {
        this.updatedMin = updatedMin;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public BooksLayersVolumeAnnotationsListQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public BooksLayersVolumeAnnotationsListQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=volumeAnnotationsVersion")
    public String volumeAnnotationsVersion;
    public BooksLayersVolumeAnnotationsListQueryParams withVolumeAnnotationsVersion(String volumeAnnotationsVersion) {
        this.volumeAnnotationsVersion = volumeAnnotationsVersion;
        return this;
    }
}