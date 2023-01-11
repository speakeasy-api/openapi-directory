package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageObjectsWatchAllQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public StorageObjectsWatchAllQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=delimiter")
    public String delimiter;
    public StorageObjectsWatchAllQueryParams withDelimiter(String delimiter) {
        this.delimiter = delimiter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endOffset")
    public String endOffset;
    public StorageObjectsWatchAllQueryParams withEndOffset(String endOffset) {
        this.endOffset = endOffset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public StorageObjectsWatchAllQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeTrailingDelimiter")
    public Boolean includeTrailingDelimiter;
    public StorageObjectsWatchAllQueryParams withIncludeTrailingDelimiter(Boolean includeTrailingDelimiter) {
        this.includeTrailingDelimiter = includeTrailingDelimiter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public StorageObjectsWatchAllQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public StorageObjectsWatchAllQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public StorageObjectsWatchAllQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageToken")
    public String pageToken;
    public StorageObjectsWatchAllQueryParams withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prefix")
    public String prefix;
    public StorageObjectsWatchAllQueryParams withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public StorageObjectsWatchAllQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=projection")
    public StorageObjectsWatchAllProjectionEnum projection;
    public StorageObjectsWatchAllQueryParams withProjection(StorageObjectsWatchAllProjectionEnum projection) {
        this.projection = projection;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public StorageObjectsWatchAllQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startOffset")
    public String startOffset;
    public StorageObjectsWatchAllQueryParams withStartOffset(String startOffset) {
        this.startOffset = startOffset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public StorageObjectsWatchAllQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userIp")
    public String userIp;
    public StorageObjectsWatchAllQueryParams withUserIp(String userIp) {
        this.userIp = userIp;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userProject")
    public String userProject;
    public StorageObjectsWatchAllQueryParams withUserProject(String userProject) {
        this.userProject = userProject;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=versions")
    public Boolean versions;
    public StorageObjectsWatchAllQueryParams withVersions(Boolean versions) {
        this.versions = versions;
        return this;
    }
}