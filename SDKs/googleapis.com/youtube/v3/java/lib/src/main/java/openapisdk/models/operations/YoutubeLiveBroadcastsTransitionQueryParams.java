package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeLiveBroadcastsTransitionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public YoutubeLiveBroadcastsTransitionQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public YoutubeLiveBroadcastsTransitionQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public YoutubeLiveBroadcastsTransitionQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=broadcastStatus")
    public YoutubeLiveBroadcastsTransitionBroadcastStatusEnum broadcastStatus;
    public YoutubeLiveBroadcastsTransitionQueryParams withBroadcastStatus(YoutubeLiveBroadcastsTransitionBroadcastStatusEnum broadcastStatus) {
        this.broadcastStatus = broadcastStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public YoutubeLiveBroadcastsTransitionQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public YoutubeLiveBroadcastsTransitionQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public YoutubeLiveBroadcastsTransitionQueryParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public YoutubeLiveBroadcastsTransitionQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public YoutubeLiveBroadcastsTransitionQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=onBehalfOfContentOwner")
    public String onBehalfOfContentOwner;
    public YoutubeLiveBroadcastsTransitionQueryParams withOnBehalfOfContentOwner(String onBehalfOfContentOwner) {
        this.onBehalfOfContentOwner = onBehalfOfContentOwner;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=onBehalfOfContentOwnerChannel")
    public String onBehalfOfContentOwnerChannel;
    public YoutubeLiveBroadcastsTransitionQueryParams withOnBehalfOfContentOwnerChannel(String onBehalfOfContentOwnerChannel) {
        this.onBehalfOfContentOwnerChannel = onBehalfOfContentOwnerChannel;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=part")
    public String[] part;
    public YoutubeLiveBroadcastsTransitionQueryParams withPart(String[] part) {
        this.part = part;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public YoutubeLiveBroadcastsTransitionQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public YoutubeLiveBroadcastsTransitionQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public YoutubeLiveBroadcastsTransitionQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public YoutubeLiveBroadcastsTransitionQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
}