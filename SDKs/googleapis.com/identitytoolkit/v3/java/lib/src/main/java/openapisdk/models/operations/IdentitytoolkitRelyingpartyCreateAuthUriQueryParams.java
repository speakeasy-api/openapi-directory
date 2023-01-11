package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdentitytoolkitRelyingpartyCreateAuthUriQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public IdentitytoolkitRelyingpartyCreateAuthUriQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public IdentitytoolkitRelyingpartyCreateAuthUriQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public IdentitytoolkitRelyingpartyCreateAuthUriQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public IdentitytoolkitRelyingpartyCreateAuthUriQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public IdentitytoolkitRelyingpartyCreateAuthUriQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public IdentitytoolkitRelyingpartyCreateAuthUriQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userIp")
    public String userIp;
    public IdentitytoolkitRelyingpartyCreateAuthUriQueryParams withUserIp(String userIp) {
        this.userIp = userIp;
        return this;
    }
}