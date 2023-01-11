package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Player
 * A Player resource.
**/
public class Player {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("avatarImageUrl")
    public String avatarImageUrl;
    public Player withAvatarImageUrl(String avatarImageUrl) {
        this.avatarImageUrl = avatarImageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bannerUrlLandscape")
    public String bannerUrlLandscape;
    public Player withBannerUrlLandscape(String bannerUrlLandscape) {
        this.bannerUrlLandscape = bannerUrlLandscape;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bannerUrlPortrait")
    public String bannerUrlPortrait;
    public Player withBannerUrlPortrait(String bannerUrlPortrait) {
        this.bannerUrlPortrait = bannerUrlPortrait;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public Player withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("experienceInfo")
    public PlayerExperienceInfo experienceInfo;
    public Player withExperienceInfo(PlayerExperienceInfo experienceInfo) {
        this.experienceInfo = experienceInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendStatus")
    public PlayerFriendStatusEnum friendStatus;
    public Player withFriendStatus(PlayerFriendStatusEnum friendStatus) {
        this.friendStatus = friendStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gamePlayerId")
    public String gamePlayerId;
    public Player withGamePlayerId(String gamePlayerId) {
        this.gamePlayerId = gamePlayerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Player withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public PlayerName name;
    public Player withName(PlayerName name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originalPlayerId")
    public String originalPlayerId;
    public Player withOriginalPlayerId(String originalPlayerId) {
        this.originalPlayerId = originalPlayerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playerId")
    public String playerId;
    public Player withPlayerId(String playerId) {
        this.playerId = playerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profileSettings")
    public ProfileSettings profileSettings;
    public Player withProfileSettings(ProfileSettings profileSettings) {
        this.profileSettings = profileSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Player withTitle(String title) {
        this.title = title;
        return this;
    }
}