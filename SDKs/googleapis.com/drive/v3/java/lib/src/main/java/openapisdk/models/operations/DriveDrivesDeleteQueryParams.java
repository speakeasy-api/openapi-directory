package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveDrivesDeleteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=allowItemDeletion")
    public Boolean allowItemDeletion;
    public DriveDrivesDeleteQueryParams withAllowItemDeletion(Boolean allowItemDeletion) {
        this.allowItemDeletion = allowItemDeletion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public DriveDrivesDeleteQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public DriveDrivesDeleteQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public DriveDrivesDeleteQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public DriveDrivesDeleteQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public DriveDrivesDeleteQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public DriveDrivesDeleteQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=useDomainAdminAccess")
    public Boolean useDomainAdminAccess;
    public DriveDrivesDeleteQueryParams withUseDomainAdminAccess(Boolean useDomainAdminAccess) {
        this.useDomainAdminAccess = useDomainAdminAccess;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userIp")
    public String userIp;
    public DriveDrivesDeleteQueryParams withUserIp(String userIp) {
        this.userIp = userIp;
        return this;
    }
}