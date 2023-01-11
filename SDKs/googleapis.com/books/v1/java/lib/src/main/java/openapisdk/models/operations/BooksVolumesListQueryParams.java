package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BooksVolumesListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public BooksVolumesListQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public BooksVolumesListQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public BooksVolumesListQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public BooksVolumesListQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=download")
    public BooksVolumesListDownloadEnum download;
    public BooksVolumesListQueryParams withDownload(BooksVolumesListDownloadEnum download) {
        this.download = download;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public BooksVolumesListQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public BooksVolumesListFilterEnum filter;
    public BooksVolumesListQueryParams withFilter(BooksVolumesListFilterEnum filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public BooksVolumesListQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=langRestrict")
    public String langRestrict;
    public BooksVolumesListQueryParams withLangRestrict(String langRestrict) {
        this.langRestrict = langRestrict;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=libraryRestrict")
    public BooksVolumesListLibraryRestrictEnum libraryRestrict;
    public BooksVolumesListQueryParams withLibraryRestrict(BooksVolumesListLibraryRestrictEnum libraryRestrict) {
        this.libraryRestrict = libraryRestrict;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxAllowedMaturityRating")
    public BooksVolumesListMaxAllowedMaturityRatingEnum maxAllowedMaturityRating;
    public BooksVolumesListQueryParams withMaxAllowedMaturityRating(BooksVolumesListMaxAllowedMaturityRatingEnum maxAllowedMaturityRating) {
        this.maxAllowedMaturityRating = maxAllowedMaturityRating;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public BooksVolumesListQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public BooksVolumesListQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=orderBy")
    public BooksVolumesListOrderByEnum orderBy;
    public BooksVolumesListQueryParams withOrderBy(BooksVolumesListOrderByEnum orderBy) {
        this.orderBy = orderBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=partner")
    public String partner;
    public BooksVolumesListQueryParams withPartner(String partner) {
        this.partner = partner;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public BooksVolumesListQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=printType")
    public BooksVolumesListPrintTypeEnum printType;
    public BooksVolumesListQueryParams withPrintType(BooksVolumesListPrintTypeEnum printType) {
        this.printType = printType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=projection")
    public BooksVolumesListProjectionEnum projection;
    public BooksVolumesListQueryParams withProjection(BooksVolumesListProjectionEnum projection) {
        this.projection = projection;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public BooksVolumesListQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public BooksVolumesListQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=showPreorders")
    public Boolean showPreorders;
    public BooksVolumesListQueryParams withShowPreorders(Boolean showPreorders) {
        this.showPreorders = showPreorders;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=source")
    public String source;
    public BooksVolumesListQueryParams withSource(String source) {
        this.source = source;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startIndex")
    public Long startIndex;
    public BooksVolumesListQueryParams withStartIndex(Long startIndex) {
        this.startIndex = startIndex;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public BooksVolumesListQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public BooksVolumesListQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
}