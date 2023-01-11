package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LabelSearchResultItem
 * Label Search Result Item
**/
public class LabelSearchResultItem {
    @JsonProperty("color")
    public String color;
    public LabelSearchResultItem withColor(String color) {
        this.color = color;
        return this;
    }
    @JsonProperty("default")
    public Boolean default_;
    public LabelSearchResultItem withDefault(Boolean default_) {
        this.default_ = default_;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public LabelSearchResultItem withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public LabelSearchResultItem withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public LabelSearchResultItem withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("node_id")
    public String nodeId;
    public LabelSearchResultItem withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonProperty("score")
    public Double score;
    public LabelSearchResultItem withScore(Double score) {
        this.score = score;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text_matches")
    public SearchResultTextMatches[] textMatches;
    public LabelSearchResultItem withTextMatches(SearchResultTextMatches[] textMatches) {
        this.textMatches = textMatches;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public LabelSearchResultItem withUrl(String url) {
        this.url = url;
        return this;
    }
}