package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageObjectsCopyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public StorageObjectsCopyQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public StorageObjectsCopyQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ifGenerationMatch")
    public String ifGenerationMatch;
    public StorageObjectsCopyQueryParams withIfGenerationMatch(String ifGenerationMatch) {
        this.ifGenerationMatch = ifGenerationMatch;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ifGenerationNotMatch")
    public String ifGenerationNotMatch;
    public StorageObjectsCopyQueryParams withIfGenerationNotMatch(String ifGenerationNotMatch) {
        this.ifGenerationNotMatch = ifGenerationNotMatch;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ifMetagenerationMatch")
    public String ifMetagenerationMatch;
    public StorageObjectsCopyQueryParams withIfMetagenerationMatch(String ifMetagenerationMatch) {
        this.ifMetagenerationMatch = ifMetagenerationMatch;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ifMetagenerationNotMatch")
    public String ifMetagenerationNotMatch;
    public StorageObjectsCopyQueryParams withIfMetagenerationNotMatch(String ifMetagenerationNotMatch) {
        this.ifMetagenerationNotMatch = ifMetagenerationNotMatch;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ifSourceGenerationMatch")
    public String ifSourceGenerationMatch;
    public StorageObjectsCopyQueryParams withIfSourceGenerationMatch(String ifSourceGenerationMatch) {
        this.ifSourceGenerationMatch = ifSourceGenerationMatch;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ifSourceGenerationNotMatch")
    public String ifSourceGenerationNotMatch;
    public StorageObjectsCopyQueryParams withIfSourceGenerationNotMatch(String ifSourceGenerationNotMatch) {
        this.ifSourceGenerationNotMatch = ifSourceGenerationNotMatch;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ifSourceMetagenerationMatch")
    public String ifSourceMetagenerationMatch;
    public StorageObjectsCopyQueryParams withIfSourceMetagenerationMatch(String ifSourceMetagenerationMatch) {
        this.ifSourceMetagenerationMatch = ifSourceMetagenerationMatch;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ifSourceMetagenerationNotMatch")
    public String ifSourceMetagenerationNotMatch;
    public StorageObjectsCopyQueryParams withIfSourceMetagenerationNotMatch(String ifSourceMetagenerationNotMatch) {
        this.ifSourceMetagenerationNotMatch = ifSourceMetagenerationNotMatch;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public StorageObjectsCopyQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public StorageObjectsCopyQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public StorageObjectsCopyQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=projection")
    public StorageObjectsCopyProjectionEnum projection;
    public StorageObjectsCopyQueryParams withProjection(StorageObjectsCopyProjectionEnum projection) {
        this.projection = projection;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public StorageObjectsCopyQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sourceGeneration")
    public String sourceGeneration;
    public StorageObjectsCopyQueryParams withSourceGeneration(String sourceGeneration) {
        this.sourceGeneration = sourceGeneration;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userIp")
    public String userIp;
    public StorageObjectsCopyQueryParams withUserIp(String userIp) {
        this.userIp = userIp;
        return this;
    }
}