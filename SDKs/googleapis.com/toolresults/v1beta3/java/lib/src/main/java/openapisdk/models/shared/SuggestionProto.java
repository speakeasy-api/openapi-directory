package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SuggestionProto {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("helpUrl")
    public String helpUrl;
    public SuggestionProto withHelpUrl(String helpUrl) {
        this.helpUrl = helpUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longMessage")
    public SafeHtmlProto longMessage;
    public SuggestionProto withLongMessage(SafeHtmlProto longMessage) {
        this.longMessage = longMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priority")
    public SuggestionProtoPriorityEnum priority;
    public SuggestionProto withPriority(SuggestionProtoPriorityEnum priority) {
        this.priority = priority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pseudoResourceId")
    public String pseudoResourceId;
    public SuggestionProto withPseudoResourceId(String pseudoResourceId) {
        this.pseudoResourceId = pseudoResourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public RegionProto region;
    public SuggestionProto withRegion(RegionProto region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceName")
    public String resourceName;
    public SuggestionProto withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("screenId")
    public String screenId;
    public SuggestionProto withScreenId(String screenId) {
        this.screenId = screenId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondaryPriority")
    public Double secondaryPriority;
    public SuggestionProto withSecondaryPriority(Double secondaryPriority) {
        this.secondaryPriority = secondaryPriority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shortMessage")
    public SafeHtmlProto shortMessage;
    public SuggestionProto withShortMessage(SafeHtmlProto shortMessage) {
        this.shortMessage = shortMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public SuggestionProto withTitle(String title) {
        this.title = title;
        return this;
    }
}