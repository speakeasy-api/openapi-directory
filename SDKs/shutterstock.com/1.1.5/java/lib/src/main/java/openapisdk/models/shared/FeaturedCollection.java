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
 * FeaturedCollection
 * Metadata about a featured collection
**/
public class FeaturedCollection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cover_item")
    public FeaturedCollectionCoverItem coverItem;
    public FeaturedCollection withCoverItem(FeaturedCollectionCoverItem coverItem) {
        this.coverItem = coverItem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_time")
    public OffsetDateTime createdTime;
    public FeaturedCollection withCreatedTime(OffsetDateTime createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hero_item")
    public FeaturedCollectionCoverItem heroItem;
    public FeaturedCollection withHeroItem(FeaturedCollectionCoverItem heroItem) {
        this.heroItem = heroItem;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public FeaturedCollection withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("items_updated_time")
    public OffsetDateTime itemsUpdatedTime;
    public FeaturedCollection withItemsUpdatedTime(OffsetDateTime itemsUpdatedTime) {
        this.itemsUpdatedTime = itemsUpdatedTime;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public FeaturedCollection withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("share_url")
    public String shareUrl;
    public FeaturedCollection withShareUrl(String shareUrl) {
        this.shareUrl = shareUrl;
        return this;
    }
    @JsonProperty("total_item_count")
    public Long totalItemCount;
    public FeaturedCollection withTotalItemCount(Long totalItemCount) {
        this.totalItemCount = totalItemCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated_time")
    public OffsetDateTime updatedTime;
    public FeaturedCollection withUpdatedTime(OffsetDateTime updatedTime) {
        this.updatedTime = updatedTime;
        return this;
    }
}