package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VolumeSearchInfo
 * Search result information related to this volume.
**/
public class VolumeSearchInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textSnippet")
    public String textSnippet;
    public VolumeSearchInfo withTextSnippet(String textSnippet) {
        this.textSnippet = textSnippet;
        return this;
    }
}