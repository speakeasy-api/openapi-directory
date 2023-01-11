package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * TopicSearchResultItem
 * Topic Search Result Item
**/
public class TopicSearchResultItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aliases")
    public TopicSearchResultItemAliases[] aliases;
    public TopicSearchResultItem withAliases(TopicSearchResultItemAliases[] aliases) {
        this.aliases = aliases;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public TopicSearchResultItem withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("created_by")
    public String createdBy;
    public TopicSearchResultItem withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonProperty("curated")
    public Boolean curated;
    public TopicSearchResultItem withCurated(Boolean curated) {
        this.curated = curated;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public TopicSearchResultItem withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("display_name")
    public String displayName;
    public TopicSearchResultItem withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonProperty("featured")
    public Boolean featured;
    public TopicSearchResultItem withFeatured(Boolean featured) {
        this.featured = featured;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logo_url")
    public String logoUrl;
    public TopicSearchResultItem withLogoUrl(String logoUrl) {
        this.logoUrl = logoUrl;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public TopicSearchResultItem withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("related")
    public TopicSearchResultItemRelated[] related;
    public TopicSearchResultItem withRelated(TopicSearchResultItemRelated[] related) {
        this.related = related;
        return this;
    }
    @JsonProperty("released")
    public String released;
    public TopicSearchResultItem withReleased(String released) {
        this.released = released;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repository_count")
    public Long repositoryCount;
    public TopicSearchResultItem withRepositoryCount(Long repositoryCount) {
        this.repositoryCount = repositoryCount;
        return this;
    }
    @JsonProperty("score")
    public Double score;
    public TopicSearchResultItem withScore(Double score) {
        this.score = score;
        return this;
    }
    @JsonProperty("short_description")
    public String shortDescription;
    public TopicSearchResultItem withShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text_matches")
    public SearchResultTextMatches[] textMatches;
    public TopicSearchResultItem withTextMatches(SearchResultTextMatches[] textMatches) {
        this.textMatches = textMatches;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public TopicSearchResultItem withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}