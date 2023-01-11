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
 * EditorialImageLivefeed
 * Metadata about editorial livefeed
**/
public class EditorialImageLivefeed {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cover_item")
    public EditorialCoverItem coverItem;
    public EditorialImageLivefeed withCoverItem(EditorialCoverItem coverItem) {
        this.coverItem = coverItem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_time")
    public OffsetDateTime createdTime;
    public EditorialImageLivefeed withCreatedTime(OffsetDateTime createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public EditorialImageLivefeed withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public EditorialImageLivefeed withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("total_item_count")
    public Long totalItemCount;
    public EditorialImageLivefeed withTotalItemCount(Long totalItemCount) {
        this.totalItemCount = totalItemCount;
        return this;
    }
}