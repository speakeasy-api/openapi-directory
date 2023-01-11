package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FileContentHints
 * Additional information about the content of the file. These fields are never populated in responses.
**/
public class FileContentHints {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("indexableText")
    public String indexableText;
    public FileContentHints withIndexableText(String indexableText) {
        this.indexableText = indexableText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnail")
    public FileContentHintsThumbnail thumbnail;
    public FileContentHints withThumbnail(FileContentHintsThumbnail thumbnail) {
        this.thumbnail = thumbnail;
        return this;
    }
}