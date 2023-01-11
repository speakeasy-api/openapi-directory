package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdexchangebuyerCreativesListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=accountId")
    public Long[] accountId;
    public AdexchangebuyerCreativesListQueryParams withAccountId(Long[] accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public AdexchangebuyerCreativesListQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=buyerCreativeId")
    public String[] buyerCreativeId;
    public AdexchangebuyerCreativesListQueryParams withBuyerCreativeId(String[] buyerCreativeId) {
        this.buyerCreativeId = buyerCreativeId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dealsStatusFilter")
    public AdexchangebuyerCreativesListDealsStatusFilterEnum dealsStatusFilter;
    public AdexchangebuyerCreativesListQueryParams withDealsStatusFilter(AdexchangebuyerCreativesListDealsStatusFilterEnum dealsStatusFilter) {
        this.dealsStatusFilter = dealsStatusFilter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public AdexchangebuyerCreativesListQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public AdexchangebuyerCreativesListQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public AdexchangebuyerCreativesListQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public AdexchangebuyerCreativesListQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=openAuctionStatusFilter")
    public AdexchangebuyerCreativesListOpenAuctionStatusFilterEnum openAuctionStatusFilter;
    public AdexchangebuyerCreativesListQueryParams withOpenAuctionStatusFilter(AdexchangebuyerCreativesListOpenAuctionStatusFilterEnum openAuctionStatusFilter) {
        this.openAuctionStatusFilter = openAuctionStatusFilter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageToken")
    public String pageToken;
    public AdexchangebuyerCreativesListQueryParams withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public AdexchangebuyerCreativesListQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public AdexchangebuyerCreativesListQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userIp")
    public String userIp;
    public AdexchangebuyerCreativesListQueryParams withUserIp(String userIp) {
        this.userIp = userIp;
        return this;
    }
}