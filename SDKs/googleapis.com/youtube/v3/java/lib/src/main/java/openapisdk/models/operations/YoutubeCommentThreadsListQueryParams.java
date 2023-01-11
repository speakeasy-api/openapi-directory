package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeCommentThreadsListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public YoutubeCommentThreadsListQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public YoutubeCommentThreadsListQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=allThreadsRelatedToChannelId")
    public String allThreadsRelatedToChannelId;
    public YoutubeCommentThreadsListQueryParams withAllThreadsRelatedToChannelId(String allThreadsRelatedToChannelId) {
        this.allThreadsRelatedToChannelId = allThreadsRelatedToChannelId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public YoutubeCommentThreadsListQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public YoutubeCommentThreadsListQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=channelId")
    public String channelId;
    public YoutubeCommentThreadsListQueryParams withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public YoutubeCommentThreadsListQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String[] id;
    public YoutubeCommentThreadsListQueryParams withId(String[] id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public YoutubeCommentThreadsListQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public YoutubeCommentThreadsListQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=moderationStatus")
    public YoutubeCommentThreadsListModerationStatusEnum moderationStatus;
    public YoutubeCommentThreadsListQueryParams withModerationStatus(YoutubeCommentThreadsListModerationStatusEnum moderationStatus) {
        this.moderationStatus = moderationStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public YoutubeCommentThreadsListQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order")
    public YoutubeCommentThreadsListOrderEnum order;
    public YoutubeCommentThreadsListQueryParams withOrder(YoutubeCommentThreadsListOrderEnum order) {
        this.order = order;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageToken")
    public String pageToken;
    public YoutubeCommentThreadsListQueryParams withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=part")
    public String[] part;
    public YoutubeCommentThreadsListQueryParams withPart(String[] part) {
        this.part = part;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public YoutubeCommentThreadsListQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public YoutubeCommentThreadsListQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=searchTerms")
    public String searchTerms;
    public YoutubeCommentThreadsListQueryParams withSearchTerms(String searchTerms) {
        this.searchTerms = searchTerms;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=textFormat")
    public YoutubeCommentThreadsListTextFormatEnum textFormat;
    public YoutubeCommentThreadsListQueryParams withTextFormat(YoutubeCommentThreadsListTextFormatEnum textFormat) {
        this.textFormat = textFormat;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public YoutubeCommentThreadsListQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public YoutubeCommentThreadsListQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=videoId")
    public String videoId;
    public YoutubeCommentThreadsListQueryParams withVideoId(String videoId) {
        this.videoId = videoId;
        return this;
    }
}