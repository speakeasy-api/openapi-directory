package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Critic {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bio")
    public String bio;
    public Critic withBio(String bio) {
        this.bio = bio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_name")
    public String displayName;
    public Critic withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multimedia")
    public CriticMultimedia multimedia;
    public Critic withMultimedia(CriticMultimedia multimedia) {
        this.multimedia = multimedia;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seo_name")
    public String seoName;
    public Critic withSeoName(String seoName) {
        this.seoName = seoName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sort_name")
    public String sortName;
    public Critic withSortName(String sortName) {
        this.sortName = sortName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public Critic withStatus(String status) {
        this.status = status;
        return this;
    }
}