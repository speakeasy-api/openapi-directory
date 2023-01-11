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
 * EntryResourceEntryResourceAttributes
 * Contains key-value pairs representing the entry's properties.
**/
public class EntryResourceEntryResourceAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("immutable_id")
    public String immutableId;
    public EntryResourceEntryResourceAttributes withImmutableId(String immutableId) {
        this.immutableId = immutableId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("last_modified")
    public OffsetDateTime lastModified;
    public EntryResourceEntryResourceAttributes withLastModified(OffsetDateTime lastModified) {
        this.lastModified = lastModified;
        return this;
    }
}