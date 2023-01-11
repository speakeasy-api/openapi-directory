package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActivityContentDetails
 * Details about the content of an activity: the video that was shared, the channel that was subscribed to, etc.
**/
public class ActivityContentDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bulletin")
    public ActivityContentDetailsBulletin bulletin;
    public ActivityContentDetails withBulletin(ActivityContentDetailsBulletin bulletin) {
        this.bulletin = bulletin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelItem")
    public ActivityContentDetailsChannelItem channelItem;
    public ActivityContentDetails withChannelItem(ActivityContentDetailsChannelItem channelItem) {
        this.channelItem = channelItem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public ActivityContentDetailsComment comment;
    public ActivityContentDetails withComment(ActivityContentDetailsComment comment) {
        this.comment = comment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("favorite")
    public ActivityContentDetailsFavorite favorite;
    public ActivityContentDetails withFavorite(ActivityContentDetailsFavorite favorite) {
        this.favorite = favorite;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("like")
    public ActivityContentDetailsLike like;
    public ActivityContentDetails withLike(ActivityContentDetailsLike like) {
        this.like = like;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playlistItem")
    public ActivityContentDetailsPlaylistItem playlistItem;
    public ActivityContentDetails withPlaylistItem(ActivityContentDetailsPlaylistItem playlistItem) {
        this.playlistItem = playlistItem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promotedItem")
    public ActivityContentDetailsPromotedItem promotedItem;
    public ActivityContentDetails withPromotedItem(ActivityContentDetailsPromotedItem promotedItem) {
        this.promotedItem = promotedItem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recommendation")
    public ActivityContentDetailsRecommendation recommendation;
    public ActivityContentDetails withRecommendation(ActivityContentDetailsRecommendation recommendation) {
        this.recommendation = recommendation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("social")
    public ActivityContentDetailsSocial social;
    public ActivityContentDetails withSocial(ActivityContentDetailsSocial social) {
        this.social = social;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscription")
    public ActivityContentDetailsSubscription subscription;
    public ActivityContentDetails withSubscription(ActivityContentDetailsSubscription subscription) {
        this.subscription = subscription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upload")
    public ActivityContentDetailsUpload upload;
    public ActivityContentDetails withUpload(ActivityContentDetailsUpload upload) {
        this.upload = upload;
        return this;
    }
}