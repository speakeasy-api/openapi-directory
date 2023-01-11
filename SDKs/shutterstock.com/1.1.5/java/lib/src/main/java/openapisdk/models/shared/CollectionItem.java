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
 * CollectionItem
 * Metadata about an item that is part of a collection
**/
public class CollectionItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("added_time")
    public OffsetDateTime addedTime;
    public CollectionItem withAddedTime(OffsetDateTime addedTime) {
        this.addedTime = addedTime;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public CollectionItem withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("media_type")
    public String mediaType;
    public CollectionItem withMediaType(String mediaType) {
        this.mediaType = mediaType;
        return this;
    }
}