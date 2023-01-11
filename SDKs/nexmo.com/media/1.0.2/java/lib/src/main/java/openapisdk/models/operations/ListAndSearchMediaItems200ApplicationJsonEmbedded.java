package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListAndSearchMediaItems200ApplicationJsonEmbedded
 * A collection of media items. See [retrieve a media item](#retrieve-a-media-item) for a description of the returned fields
**/
public class ListAndSearchMediaItems200ApplicationJsonEmbedded {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("media")
    public openapisdk.models.shared.Media[] media;
    public ListAndSearchMediaItems200ApplicationJsonEmbedded withMedia(openapisdk.models.shared.Media[] media) {
        this.media = media;
        return this;
    }
}