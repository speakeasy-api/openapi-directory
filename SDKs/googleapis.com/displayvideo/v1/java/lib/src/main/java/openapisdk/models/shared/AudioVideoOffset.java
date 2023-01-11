package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AudioVideoOffset
 * The length an audio or a video has been played.
**/
public class AudioVideoOffset {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percentage")
    public String percentage;
    public AudioVideoOffset withPercentage(String percentage) {
        this.percentage = percentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seconds")
    public String seconds;
    public AudioVideoOffset withSeconds(String seconds) {
        this.seconds = seconds;
        return this;
    }
}