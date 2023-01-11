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
 * SavedShowObject

 * https://developer.spotify.com/documentation/web-api/reference/#object-savedshowobject - Find more info on the official Spotify Web API Reference
**/
public class SavedShowObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("added_at")
    public OffsetDateTime addedAt;
    public SavedShowObject withAddedAt(OffsetDateTime addedAt) {
        this.addedAt = addedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show")
    public SimplifiedShowObject show;
    public SavedShowObject withShow(SimplifiedShowObject show) {
        this.show = show;
        return this;
    }
}