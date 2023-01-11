package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RecommendationSeedObject

 * https://developer.spotify.com/documentation/web-api/reference/#object-recommendationseedobject - Find more info on the official Spotify Web API Reference
**/
public class RecommendationSeedObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("afterFilteringSize")
    public Integer afterFilteringSize;
    public RecommendationSeedObject withAfterFilteringSize(Integer afterFilteringSize) {
        this.afterFilteringSize = afterFilteringSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("afterRelinkingSize")
    public Integer afterRelinkingSize;
    public RecommendationSeedObject withAfterRelinkingSize(Integer afterRelinkingSize) {
        this.afterRelinkingSize = afterRelinkingSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public RecommendationSeedObject withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public RecommendationSeedObject withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initialPoolSize")
    public Integer initialPoolSize;
    public RecommendationSeedObject withInitialPoolSize(Integer initialPoolSize) {
        this.initialPoolSize = initialPoolSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public RecommendationSeedObject withType(String type) {
        this.type = type;
        return this;
    }
}