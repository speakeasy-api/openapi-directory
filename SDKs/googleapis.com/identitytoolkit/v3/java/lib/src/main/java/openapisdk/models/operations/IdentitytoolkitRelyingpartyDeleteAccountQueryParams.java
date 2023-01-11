package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdentitytoolkitRelyingpartyDeleteAccountQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public IdentitytoolkitRelyingpartyDeleteAccountQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public IdentitytoolkitRelyingpartyDeleteAccountQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public IdentitytoolkitRelyingpartyDeleteAccountQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public IdentitytoolkitRelyingpartyDeleteAccountQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public IdentitytoolkitRelyingpartyDeleteAccountQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public IdentitytoolkitRelyingpartyDeleteAccountQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userIp")
    public String userIp;
    public IdentitytoolkitRelyingpartyDeleteAccountQueryParams withUserIp(String userIp) {
        this.userIp = userIp;
        return this;
    }
}