/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class AdexchangebuyerCreativesListRequest {
    /**
     * When specified, only creatives for the given account ids are returned.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=accountId")
    public Long[] accountId;

    public AdexchangebuyerCreativesListRequest withAccountId(Long[] accountId) {
        this.accountId = accountId;
        return this;
    }
    
    /**
     * Data format for the response.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public org.openapis.openapi.models.shared.AltEnum alt;

    public AdexchangebuyerCreativesListRequest withAlt(org.openapis.openapi.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    
    /**
     * When specified, only creatives for the given buyer creative ids are returned.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=buyerCreativeId")
    public String[] buyerCreativeId;

    public AdexchangebuyerCreativesListRequest withBuyerCreativeId(String[] buyerCreativeId) {
        this.buyerCreativeId = buyerCreativeId;
        return this;
    }
    
    /**
     * When specified, only creatives having the given deals status are returned.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dealsStatusFilter")
    public AdexchangebuyerCreativesListDealsStatusFilterEnum dealsStatusFilter;

    public AdexchangebuyerCreativesListRequest withDealsStatusFilter(AdexchangebuyerCreativesListDealsStatusFilterEnum dealsStatusFilter) {
        this.dealsStatusFilter = dealsStatusFilter;
        return this;
    }
    
    /**
     * Selector specifying which fields to include in a partial response.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;

    public AdexchangebuyerCreativesListRequest withFields(String fields) {
        this.fields = fields;
        return this;
    }
    
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;

    public AdexchangebuyerCreativesListRequest withKey(String key) {
        this.key = key;
        return this;
    }
    
    /**
     * Maximum number of entries returned on one result page. If not set, the default is 100. Optional.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;

    public AdexchangebuyerCreativesListRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    
    /**
     * OAuth 2.0 token for the current user.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;

    public AdexchangebuyerCreativesListRequest withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    
    /**
     * When specified, only creatives having the given open auction status are returned.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=openAuctionStatusFilter")
    public AdexchangebuyerCreativesListOpenAuctionStatusFilterEnum openAuctionStatusFilter;

    public AdexchangebuyerCreativesListRequest withOpenAuctionStatusFilter(AdexchangebuyerCreativesListOpenAuctionStatusFilterEnum openAuctionStatusFilter) {
        this.openAuctionStatusFilter = openAuctionStatusFilter;
        return this;
    }
    
    /**
     * A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response. Optional.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageToken")
    public String pageToken;

    public AdexchangebuyerCreativesListRequest withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    
    /**
     * Returns response with indentations and line breaks.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;

    public AdexchangebuyerCreativesListRequest withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;

    public AdexchangebuyerCreativesListRequest withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    
    /**
     * Deprecated. Please use quotaUser instead.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userIp")
    public String userIp;

    public AdexchangebuyerCreativesListRequest withUserIp(String userIp) {
        this.userIp = userIp;
        return this;
    }
    
    public AdexchangebuyerCreativesListRequest(){}
}
