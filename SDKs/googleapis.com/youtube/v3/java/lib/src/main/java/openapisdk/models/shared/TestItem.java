package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TestItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("featuredPart")
    public Boolean featuredPart;
    public TestItem withFeaturedPart(Boolean featuredPart) {
        this.featuredPart = featuredPart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gaia")
    public String gaia;
    public TestItem withGaia(String gaia) {
        this.gaia = gaia;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public TestItem withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snippet")
    public java.util.Map<String, Object> snippet;
    public TestItem withSnippet(java.util.Map<String, Object> snippet) {
        this.snippet = snippet;
        return this;
    }
}