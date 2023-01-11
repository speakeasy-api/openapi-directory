package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PlaylistPlayer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embedHtml")
    public String embedHtml;
    public PlaylistPlayer withEmbedHtml(String embedHtml) {
        this.embedHtml = embedHtml;
        return this;
    }
}