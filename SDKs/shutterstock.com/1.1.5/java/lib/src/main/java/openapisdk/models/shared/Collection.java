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
 * Collection
 * Metadata about a collection of assets
**/
public class Collection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cover_item")
    public CollectionItem coverItem;
    public Collection withCoverItem(CollectionItem coverItem) {
        this.coverItem = coverItem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_time")
    public OffsetDateTime createdTime;
    public Collection withCreatedTime(OffsetDateTime createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public Collection withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("items_updated_time")
    public OffsetDateTime itemsUpdatedTime;
    public Collection withItemsUpdatedTime(OffsetDateTime itemsUpdatedTime) {
        this.itemsUpdatedTime = itemsUpdatedTime;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Collection withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("share_code")
    public String shareCode;
    public Collection withShareCode(String shareCode) {
        this.shareCode = shareCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("share_url")
    public String shareUrl;
    public Collection withShareUrl(String shareUrl) {
        this.shareUrl = shareUrl;
        return this;
    }
    @JsonProperty("total_item_count")
    public Long totalItemCount;
    public Collection withTotalItemCount(Long totalItemCount) {
        this.totalItemCount = totalItemCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated_time")
    public OffsetDateTime updatedTime;
    public Collection withUpdatedTime(OffsetDateTime updatedTime) {
        this.updatedTime = updatedTime;
        return this;
    }
}