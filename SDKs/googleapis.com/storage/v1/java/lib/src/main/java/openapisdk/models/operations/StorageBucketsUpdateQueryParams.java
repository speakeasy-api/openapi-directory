package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageBucketsUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public StorageBucketsUpdateQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public StorageBucketsUpdateQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ifMetagenerationMatch")
    public String ifMetagenerationMatch;
    public StorageBucketsUpdateQueryParams withIfMetagenerationMatch(String ifMetagenerationMatch) {
        this.ifMetagenerationMatch = ifMetagenerationMatch;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ifMetagenerationNotMatch")
    public String ifMetagenerationNotMatch;
    public StorageBucketsUpdateQueryParams withIfMetagenerationNotMatch(String ifMetagenerationNotMatch) {
        this.ifMetagenerationNotMatch = ifMetagenerationNotMatch;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public StorageBucketsUpdateQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public StorageBucketsUpdateQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=predefinedAcl")
    public StorageBucketsUpdatePredefinedAclEnum predefinedAcl;
    public StorageBucketsUpdateQueryParams withPredefinedAcl(StorageBucketsUpdatePredefinedAclEnum predefinedAcl) {
        this.predefinedAcl = predefinedAcl;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=predefinedDefaultObjectAcl")
    public StorageBucketsUpdatePredefinedDefaultObjectAclEnum predefinedDefaultObjectAcl;
    public StorageBucketsUpdateQueryParams withPredefinedDefaultObjectAcl(StorageBucketsUpdatePredefinedDefaultObjectAclEnum predefinedDefaultObjectAcl) {
        this.predefinedDefaultObjectAcl = predefinedDefaultObjectAcl;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public StorageBucketsUpdateQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=projection")
    public StorageBucketsUpdateProjectionEnum projection;
    public StorageBucketsUpdateQueryParams withProjection(StorageBucketsUpdateProjectionEnum projection) {
        this.projection = projection;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public StorageBucketsUpdateQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public StorageBucketsUpdateQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userIp")
    public String userIp;
    public StorageBucketsUpdateQueryParams withUserIp(String userIp) {
        this.userIp = userIp;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userProject")
    public String userProject;
    public StorageBucketsUpdateQueryParams withUserProject(String userProject) {
        this.userProject = userProject;
        return this;
    }
}