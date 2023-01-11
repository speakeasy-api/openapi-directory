package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Application
 * The Application resource.
**/
public class Application {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("achievement_count")
    public Integer achievementCount;
    public Application withAchievementCount(Integer achievementCount) {
        this.achievementCount = achievementCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assets")
    public ImageAsset[] assets;
    public Application withAssets(ImageAsset[] assets) {
        this.assets = assets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("author")
    public String author;
    public Application withAuthor(String author) {
        this.author = author;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public ApplicationCategory category;
    public Application withCategory(ApplicationCategory category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Application withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabledFeatures")
    public ApplicationEnabledFeaturesEnum[] enabledFeatures;
    public Application withEnabledFeatures(ApplicationEnabledFeaturesEnum[] enabledFeatures) {
        this.enabledFeatures = enabledFeatures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Application withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instances")
    public Instance[] instances;
    public Application withInstances(Instance[] instances) {
        this.instances = instances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Application withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUpdatedTimestamp")
    public String lastUpdatedTimestamp;
    public Application withLastUpdatedTimestamp(String lastUpdatedTimestamp) {
        this.lastUpdatedTimestamp = lastUpdatedTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("leaderboard_count")
    public Integer leaderboardCount;
    public Application withLeaderboardCount(Integer leaderboardCount) {
        this.leaderboardCount = leaderboardCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Application withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("themeColor")
    public String themeColor;
    public Application withThemeColor(String themeColor) {
        this.themeColor = themeColor;
        return this;
    }
}