package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TagSetting
 * Tag Settings
**/
public class TagSetting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalKeyValues")
    public String additionalKeyValues;
    public TagSetting withAdditionalKeyValues(String additionalKeyValues) {
        this.additionalKeyValues = additionalKeyValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeClickThroughUrls")
    public Boolean includeClickThroughUrls;
    public TagSetting withIncludeClickThroughUrls(Boolean includeClickThroughUrls) {
        this.includeClickThroughUrls = includeClickThroughUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeClickTracking")
    public Boolean includeClickTracking;
    public TagSetting withIncludeClickTracking(Boolean includeClickTracking) {
        this.includeClickTracking = includeClickTracking;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keywordOption")
    public TagSettingKeywordOptionEnum keywordOption;
    public TagSetting withKeywordOption(TagSettingKeywordOptionEnum keywordOption) {
        this.keywordOption = keywordOption;
        return this;
    }
}