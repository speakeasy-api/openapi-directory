package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AchievementConfigurationDetail
 * An achievement configuration detail.
**/
public class AchievementConfigurationDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public LocalizedStringBundle description;
    public AchievementConfigurationDetail withDescription(LocalizedStringBundle description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iconUrl")
    public String iconUrl;
    public AchievementConfigurationDetail withIconUrl(String iconUrl) {
        this.iconUrl = iconUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public AchievementConfigurationDetail withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public LocalizedStringBundle name;
    public AchievementConfigurationDetail withName(LocalizedStringBundle name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pointValue")
    public Integer pointValue;
    public AchievementConfigurationDetail withPointValue(Integer pointValue) {
        this.pointValue = pointValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortRank")
    public Integer sortRank;
    public AchievementConfigurationDetail withSortRank(Integer sortRank) {
        this.sortRank = sortRank;
        return this;
    }
}