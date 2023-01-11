package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageObjectsGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public StorageObjectsGetQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public StorageObjectsGetQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=generation")
    public String generation;
    public StorageObjectsGetQueryParams withGeneration(String generation) {
        this.generation = generation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ifGenerationMatch")
    public String ifGenerationMatch;
    public StorageObjectsGetQueryParams withIfGenerationMatch(String ifGenerationMatch) {
        this.ifGenerationMatch = ifGenerationMatch;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ifGenerationNotMatch")
    public String ifGenerationNotMatch;
    public StorageObjectsGetQueryParams withIfGenerationNotMatch(String ifGenerationNotMatch) {
        this.ifGenerationNotMatch = ifGenerationNotMatch;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ifMetagenerationMatch")
    public String ifMetagenerationMatch;
    public StorageObjectsGetQueryParams withIfMetagenerationMatch(String ifMetagenerationMatch) {
        this.ifMetagenerationMatch = ifMetagenerationMatch;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ifMetagenerationNotMatch")
    public String ifMetagenerationNotMatch;
    public StorageObjectsGetQueryParams withIfMetagenerationNotMatch(String ifMetagenerationNotMatch) {
        this.ifMetagenerationNotMatch = ifMetagenerationNotMatch;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public StorageObjectsGetQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public StorageObjectsGetQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public StorageObjectsGetQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=projection")
    public StorageObjectsGetProjectionEnum projection;
    public StorageObjectsGetQueryParams withProjection(StorageObjectsGetProjectionEnum projection) {
        this.projection = projection;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public StorageObjectsGetQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public StorageObjectsGetQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userIp")
    public String userIp;
    public StorageObjectsGetQueryParams withUserIp(String userIp) {
        this.userIp = userIp;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userProject")
    public String userProject;
    public StorageObjectsGetQueryParams withUserProject(String userProject) {
        this.userProject = userProject;
        return this;
    }
}