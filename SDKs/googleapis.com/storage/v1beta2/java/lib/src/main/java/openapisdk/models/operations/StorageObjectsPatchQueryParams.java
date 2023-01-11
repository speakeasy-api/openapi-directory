package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageObjectsPatchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public StorageObjectsPatchQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public StorageObjectsPatchQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=generation")
    public String generation;
    public StorageObjectsPatchQueryParams withGeneration(String generation) {
        this.generation = generation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ifGenerationMatch")
    public String ifGenerationMatch;
    public StorageObjectsPatchQueryParams withIfGenerationMatch(String ifGenerationMatch) {
        this.ifGenerationMatch = ifGenerationMatch;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ifGenerationNotMatch")
    public String ifGenerationNotMatch;
    public StorageObjectsPatchQueryParams withIfGenerationNotMatch(String ifGenerationNotMatch) {
        this.ifGenerationNotMatch = ifGenerationNotMatch;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ifMetagenerationMatch")
    public String ifMetagenerationMatch;
    public StorageObjectsPatchQueryParams withIfMetagenerationMatch(String ifMetagenerationMatch) {
        this.ifMetagenerationMatch = ifMetagenerationMatch;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ifMetagenerationNotMatch")
    public String ifMetagenerationNotMatch;
    public StorageObjectsPatchQueryParams withIfMetagenerationNotMatch(String ifMetagenerationNotMatch) {
        this.ifMetagenerationNotMatch = ifMetagenerationNotMatch;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public StorageObjectsPatchQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public StorageObjectsPatchQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public StorageObjectsPatchQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=projection")
    public StorageObjectsPatchProjectionEnum projection;
    public StorageObjectsPatchQueryParams withProjection(StorageObjectsPatchProjectionEnum projection) {
        this.projection = projection;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public StorageObjectsPatchQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userIp")
    public String userIp;
    public StorageObjectsPatchQueryParams withUserIp(String userIp) {
        this.userIp = userIp;
        return this;
    }
}