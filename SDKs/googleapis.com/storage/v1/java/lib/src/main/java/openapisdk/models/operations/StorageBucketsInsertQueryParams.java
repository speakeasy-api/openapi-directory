package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageBucketsInsertQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public StorageBucketsInsertQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public StorageBucketsInsertQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public StorageBucketsInsertQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public StorageBucketsInsertQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=predefinedAcl")
    public StorageBucketsInsertPredefinedAclEnum predefinedAcl;
    public StorageBucketsInsertQueryParams withPredefinedAcl(StorageBucketsInsertPredefinedAclEnum predefinedAcl) {
        this.predefinedAcl = predefinedAcl;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=predefinedDefaultObjectAcl")
    public StorageBucketsInsertPredefinedDefaultObjectAclEnum predefinedDefaultObjectAcl;
    public StorageBucketsInsertQueryParams withPredefinedDefaultObjectAcl(StorageBucketsInsertPredefinedDefaultObjectAclEnum predefinedDefaultObjectAcl) {
        this.predefinedDefaultObjectAcl = predefinedDefaultObjectAcl;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public StorageBucketsInsertQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=project")
    public String project;
    public StorageBucketsInsertQueryParams withProject(String project) {
        this.project = project;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=projection")
    public StorageBucketsInsertProjectionEnum projection;
    public StorageBucketsInsertQueryParams withProjection(StorageBucketsInsertProjectionEnum projection) {
        this.projection = projection;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public StorageBucketsInsertQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public StorageBucketsInsertQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userIp")
    public String userIp;
    public StorageBucketsInsertQueryParams withUserIp(String userIp) {
        this.userIp = userIp;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userProject")
    public String userProject;
    public StorageBucketsInsertQueryParams withUserProject(String userProject) {
        this.userProject = userProject;
        return this;
    }
}