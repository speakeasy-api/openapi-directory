package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdsensehostAccountsAdunitsGetAdCodeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public AdsensehostAccountsAdunitsGetAdCodeQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public AdsensehostAccountsAdunitsGetAdCodeQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=hostCustomChannelId")
    public String[] hostCustomChannelId;
    public AdsensehostAccountsAdunitsGetAdCodeQueryParams withHostCustomChannelId(String[] hostCustomChannelId) {
        this.hostCustomChannelId = hostCustomChannelId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public AdsensehostAccountsAdunitsGetAdCodeQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public AdsensehostAccountsAdunitsGetAdCodeQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public AdsensehostAccountsAdunitsGetAdCodeQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public AdsensehostAccountsAdunitsGetAdCodeQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userIp")
    public String userIp;
    public AdsensehostAccountsAdunitsGetAdCodeQueryParams withUserIp(String userIp) {
        this.userIp = userIp;
        return this;
    }
}