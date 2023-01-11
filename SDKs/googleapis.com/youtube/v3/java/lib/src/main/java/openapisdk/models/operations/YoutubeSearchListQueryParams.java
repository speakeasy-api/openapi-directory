package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeSearchListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public YoutubeSearchListQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public YoutubeSearchListQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public YoutubeSearchListQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public YoutubeSearchListQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=channelId")
    public String channelId;
    public YoutubeSearchListQueryParams withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=channelType")
    public YoutubeSearchListChannelTypeEnum channelType;
    public YoutubeSearchListQueryParams withChannelType(YoutubeSearchListChannelTypeEnum channelType) {
        this.channelType = channelType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=eventType")
    public YoutubeSearchListEventTypeEnum eventType;
    public YoutubeSearchListQueryParams withEventType(YoutubeSearchListEventTypeEnum eventType) {
        this.eventType = eventType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public YoutubeSearchListQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=forContentOwner")
    public Boolean forContentOwner;
    public YoutubeSearchListQueryParams withForContentOwner(Boolean forContentOwner) {
        this.forContentOwner = forContentOwner;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=forDeveloper")
    public Boolean forDeveloper;
    public YoutubeSearchListQueryParams withForDeveloper(Boolean forDeveloper) {
        this.forDeveloper = forDeveloper;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=forMine")
    public Boolean forMine;
    public YoutubeSearchListQueryParams withForMine(Boolean forMine) {
        this.forMine = forMine;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public YoutubeSearchListQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=location")
    public String location;
    public YoutubeSearchListQueryParams withLocation(String location) {
        this.location = location;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locationRadius")
    public String locationRadius;
    public YoutubeSearchListQueryParams withLocationRadius(String locationRadius) {
        this.locationRadius = locationRadius;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public YoutubeSearchListQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public YoutubeSearchListQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=onBehalfOfContentOwner")
    public String onBehalfOfContentOwner;
    public YoutubeSearchListQueryParams withOnBehalfOfContentOwner(String onBehalfOfContentOwner) {
        this.onBehalfOfContentOwner = onBehalfOfContentOwner;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order")
    public YoutubeSearchListOrderEnum order;
    public YoutubeSearchListQueryParams withOrder(YoutubeSearchListOrderEnum order) {
        this.order = order;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageToken")
    public String pageToken;
    public YoutubeSearchListQueryParams withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=part")
    public String[] part;
    public YoutubeSearchListQueryParams withPart(String[] part) {
        this.part = part;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public YoutubeSearchListQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=publishedAfter")
    public String publishedAfter;
    public YoutubeSearchListQueryParams withPublishedAfter(String publishedAfter) {
        this.publishedAfter = publishedAfter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=publishedBefore")
    public String publishedBefore;
    public YoutubeSearchListQueryParams withPublishedBefore(String publishedBefore) {
        this.publishedBefore = publishedBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public YoutubeSearchListQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public YoutubeSearchListQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=regionCode")
    public String regionCode;
    public YoutubeSearchListQueryParams withRegionCode(String regionCode) {
        this.regionCode = regionCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=relatedToVideoId")
    public String relatedToVideoId;
    public YoutubeSearchListQueryParams withRelatedToVideoId(String relatedToVideoId) {
        this.relatedToVideoId = relatedToVideoId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=relevanceLanguage")
    public String relevanceLanguage;
    public YoutubeSearchListQueryParams withRelevanceLanguage(String relevanceLanguage) {
        this.relevanceLanguage = relevanceLanguage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=safeSearch")
    public YoutubeSearchListSafeSearchEnum safeSearch;
    public YoutubeSearchListQueryParams withSafeSearch(YoutubeSearchListSafeSearchEnum safeSearch) {
        this.safeSearch = safeSearch;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=topicId")
    public String topicId;
    public YoutubeSearchListQueryParams withTopicId(String topicId) {
        this.topicId = topicId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public String[] type;
    public YoutubeSearchListQueryParams withType(String[] type) {
        this.type = type;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public YoutubeSearchListQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public YoutubeSearchListQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=videoCaption")
    public YoutubeSearchListVideoCaptionEnum videoCaption;
    public YoutubeSearchListQueryParams withVideoCaption(YoutubeSearchListVideoCaptionEnum videoCaption) {
        this.videoCaption = videoCaption;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=videoCategoryId")
    public String videoCategoryId;
    public YoutubeSearchListQueryParams withVideoCategoryId(String videoCategoryId) {
        this.videoCategoryId = videoCategoryId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=videoDefinition")
    public YoutubeSearchListVideoDefinitionEnum videoDefinition;
    public YoutubeSearchListQueryParams withVideoDefinition(YoutubeSearchListVideoDefinitionEnum videoDefinition) {
        this.videoDefinition = videoDefinition;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=videoDimension")
    public YoutubeSearchListVideoDimensionEnum videoDimension;
    public YoutubeSearchListQueryParams withVideoDimension(YoutubeSearchListVideoDimensionEnum videoDimension) {
        this.videoDimension = videoDimension;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=videoDuration")
    public YoutubeSearchListVideoDurationEnum videoDuration;
    public YoutubeSearchListQueryParams withVideoDuration(YoutubeSearchListVideoDurationEnum videoDuration) {
        this.videoDuration = videoDuration;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=videoEmbeddable")
    public YoutubeSearchListVideoEmbeddableEnum videoEmbeddable;
    public YoutubeSearchListQueryParams withVideoEmbeddable(YoutubeSearchListVideoEmbeddableEnum videoEmbeddable) {
        this.videoEmbeddable = videoEmbeddable;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=videoLicense")
    public YoutubeSearchListVideoLicenseEnum videoLicense;
    public YoutubeSearchListQueryParams withVideoLicense(YoutubeSearchListVideoLicenseEnum videoLicense) {
        this.videoLicense = videoLicense;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=videoSyndicated")
    public YoutubeSearchListVideoSyndicatedEnum videoSyndicated;
    public YoutubeSearchListQueryParams withVideoSyndicated(YoutubeSearchListVideoSyndicatedEnum videoSyndicated) {
        this.videoSyndicated = videoSyndicated;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=videoType")
    public YoutubeSearchListVideoTypeEnum videoType;
    public YoutubeSearchListQueryParams withVideoType(YoutubeSearchListVideoTypeEnum videoType) {
        this.videoType = videoType;
        return this;
    }
}