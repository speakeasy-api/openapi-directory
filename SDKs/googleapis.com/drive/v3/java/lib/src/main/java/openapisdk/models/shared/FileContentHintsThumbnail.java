package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FileContentHintsThumbnail
 * A thumbnail for the file. This will only be used if Google Drive cannot generate a standard thumbnail.
**/
public class FileContentHintsThumbnail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public String image;
    public FileContentHintsThumbnail withImage(String image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mimeType")
    public String mimeType;
    public FileContentHintsThumbnail withMimeType(String mimeType) {
        this.mimeType = mimeType;
        return this;
    }
}