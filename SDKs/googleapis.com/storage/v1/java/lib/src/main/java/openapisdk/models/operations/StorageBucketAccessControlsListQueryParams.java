package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageBucketAccessControlsListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public StorageBucketAccessControlsListQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public StorageBucketAccessControlsListQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public StorageBucketAccessControlsListQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public StorageBucketAccessControlsListQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public StorageBucketAccessControlsListQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public StorageBucketAccessControlsListQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public StorageBucketAccessControlsListQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userIp")
    public String userIp;
    public StorageBucketAccessControlsListQueryParams withUserIp(String userIp) {
        this.userIp = userIp;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userProject")
    public String userProject;
    public StorageBucketAccessControlsListQueryParams withUserProject(String userProject) {
        this.userProject = userProject;
        return this;
    }
}