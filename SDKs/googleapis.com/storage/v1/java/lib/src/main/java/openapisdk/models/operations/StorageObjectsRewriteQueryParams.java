package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageObjectsRewriteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public StorageObjectsRewriteQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=destinationKmsKeyName")
    public String destinationKmsKeyName;
    public StorageObjectsRewriteQueryParams withDestinationKmsKeyName(String destinationKmsKeyName) {
        this.destinationKmsKeyName = destinationKmsKeyName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=destinationPredefinedAcl")
    public StorageObjectsRewriteDestinationPredefinedAclEnum destinationPredefinedAcl;
    public StorageObjectsRewriteQueryParams withDestinationPredefinedAcl(StorageObjectsRewriteDestinationPredefinedAclEnum destinationPredefinedAcl) {
        this.destinationPredefinedAcl = destinationPredefinedAcl;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public StorageObjectsRewriteQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ifGenerationMatch")
    public String ifGenerationMatch;
    public StorageObjectsRewriteQueryParams withIfGenerationMatch(String ifGenerationMatch) {
        this.ifGenerationMatch = ifGenerationMatch;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ifGenerationNotMatch")
    public String ifGenerationNotMatch;
    public StorageObjectsRewriteQueryParams withIfGenerationNotMatch(String ifGenerationNotMatch) {
        this.ifGenerationNotMatch = ifGenerationNotMatch;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ifMetagenerationMatch")
    public String ifMetagenerationMatch;
    public StorageObjectsRewriteQueryParams withIfMetagenerationMatch(String ifMetagenerationMatch) {
        this.ifMetagenerationMatch = ifMetagenerationMatch;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ifMetagenerationNotMatch")
    public String ifMetagenerationNotMatch;
    public StorageObjectsRewriteQueryParams withIfMetagenerationNotMatch(String ifMetagenerationNotMatch) {
        this.ifMetagenerationNotMatch = ifMetagenerationNotMatch;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ifSourceGenerationMatch")
    public String ifSourceGenerationMatch;
    public StorageObjectsRewriteQueryParams withIfSourceGenerationMatch(String ifSourceGenerationMatch) {
        this.ifSourceGenerationMatch = ifSourceGenerationMatch;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ifSourceGenerationNotMatch")
    public String ifSourceGenerationNotMatch;
    public StorageObjectsRewriteQueryParams withIfSourceGenerationNotMatch(String ifSourceGenerationNotMatch) {
        this.ifSourceGenerationNotMatch = ifSourceGenerationNotMatch;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ifSourceMetagenerationMatch")
    public String ifSourceMetagenerationMatch;
    public StorageObjectsRewriteQueryParams withIfSourceMetagenerationMatch(String ifSourceMetagenerationMatch) {
        this.ifSourceMetagenerationMatch = ifSourceMetagenerationMatch;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ifSourceMetagenerationNotMatch")
    public String ifSourceMetagenerationNotMatch;
    public StorageObjectsRewriteQueryParams withIfSourceMetagenerationNotMatch(String ifSourceMetagenerationNotMatch) {
        this.ifSourceMetagenerationNotMatch = ifSourceMetagenerationNotMatch;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public StorageObjectsRewriteQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxBytesRewrittenPerCall")
    public String maxBytesRewrittenPerCall;
    public StorageObjectsRewriteQueryParams withMaxBytesRewrittenPerCall(String maxBytesRewrittenPerCall) {
        this.maxBytesRewrittenPerCall = maxBytesRewrittenPerCall;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public StorageObjectsRewriteQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public StorageObjectsRewriteQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=projection")
    public StorageObjectsRewriteProjectionEnum projection;
    public StorageObjectsRewriteQueryParams withProjection(StorageObjectsRewriteProjectionEnum projection) {
        this.projection = projection;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public StorageObjectsRewriteQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rewriteToken")
    public String rewriteToken;
    public StorageObjectsRewriteQueryParams withRewriteToken(String rewriteToken) {
        this.rewriteToken = rewriteToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sourceGeneration")
    public String sourceGeneration;
    public StorageObjectsRewriteQueryParams withSourceGeneration(String sourceGeneration) {
        this.sourceGeneration = sourceGeneration;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public StorageObjectsRewriteQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userIp")
    public String userIp;
    public StorageObjectsRewriteQueryParams withUserIp(String userIp) {
        this.userIp = userIp;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userProject")
    public String userProject;
    public StorageObjectsRewriteQueryParams withUserProject(String userProject) {
        this.userProject = userProject;
        return this;
    }
}