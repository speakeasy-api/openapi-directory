package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageProjectsHmacKeysListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public StorageProjectsHmacKeysListQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public StorageProjectsHmacKeysListQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public StorageProjectsHmacKeysListQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public StorageProjectsHmacKeysListQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public StorageProjectsHmacKeysListQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageToken")
    public String pageToken;
    public StorageProjectsHmacKeysListQueryParams withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public StorageProjectsHmacKeysListQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public StorageProjectsHmacKeysListQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=serviceAccountEmail")
    public String serviceAccountEmail;
    public StorageProjectsHmacKeysListQueryParams withServiceAccountEmail(String serviceAccountEmail) {
        this.serviceAccountEmail = serviceAccountEmail;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=showDeletedKeys")
    public Boolean showDeletedKeys;
    public StorageProjectsHmacKeysListQueryParams withShowDeletedKeys(Boolean showDeletedKeys) {
        this.showDeletedKeys = showDeletedKeys;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public StorageProjectsHmacKeysListQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userIp")
    public String userIp;
    public StorageProjectsHmacKeysListQueryParams withUserIp(String userIp) {
        this.userIp = userIp;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userProject")
    public String userProject;
    public StorageProjectsHmacKeysListQueryParams withUserProject(String userProject) {
        this.userProject = userProject;
        return this;
    }
}