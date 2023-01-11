package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeSubscriptionsListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public YoutubeSubscriptionsListQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public YoutubeSubscriptionsListQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public YoutubeSubscriptionsListQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public YoutubeSubscriptionsListQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=channelId")
    public String channelId;
    public YoutubeSubscriptionsListQueryParams withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public YoutubeSubscriptionsListQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=forChannelId")
    public String forChannelId;
    public YoutubeSubscriptionsListQueryParams withForChannelId(String forChannelId) {
        this.forChannelId = forChannelId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String[] id;
    public YoutubeSubscriptionsListQueryParams withId(String[] id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public YoutubeSubscriptionsListQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public YoutubeSubscriptionsListQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=mine")
    public Boolean mine;
    public YoutubeSubscriptionsListQueryParams withMine(Boolean mine) {
        this.mine = mine;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=myRecentSubscribers")
    public Boolean myRecentSubscribers;
    public YoutubeSubscriptionsListQueryParams withMyRecentSubscribers(Boolean myRecentSubscribers) {
        this.myRecentSubscribers = myRecentSubscribers;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=mySubscribers")
    public Boolean mySubscribers;
    public YoutubeSubscriptionsListQueryParams withMySubscribers(Boolean mySubscribers) {
        this.mySubscribers = mySubscribers;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public YoutubeSubscriptionsListQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=onBehalfOfContentOwner")
    public String onBehalfOfContentOwner;
    public YoutubeSubscriptionsListQueryParams withOnBehalfOfContentOwner(String onBehalfOfContentOwner) {
        this.onBehalfOfContentOwner = onBehalfOfContentOwner;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=onBehalfOfContentOwnerChannel")
    public String onBehalfOfContentOwnerChannel;
    public YoutubeSubscriptionsListQueryParams withOnBehalfOfContentOwnerChannel(String onBehalfOfContentOwnerChannel) {
        this.onBehalfOfContentOwnerChannel = onBehalfOfContentOwnerChannel;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order")
    public YoutubeSubscriptionsListOrderEnum order;
    public YoutubeSubscriptionsListQueryParams withOrder(YoutubeSubscriptionsListOrderEnum order) {
        this.order = order;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageToken")
    public String pageToken;
    public YoutubeSubscriptionsListQueryParams withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=part")
    public String[] part;
    public YoutubeSubscriptionsListQueryParams withPart(String[] part) {
        this.part = part;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public YoutubeSubscriptionsListQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public YoutubeSubscriptionsListQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public YoutubeSubscriptionsListQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public YoutubeSubscriptionsListQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
}