package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FileThumbnail
 * A thumbnail for the file. This will only be used if a standard thumbnail cannot be generated.
**/
public class FileThumbnail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public String image;
    public FileThumbnail withImage(String image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mimeType")
    public String mimeType;
    public FileThumbnail withMimeType(String mimeType) {
        this.mimeType = mimeType;
        return this;
    }
}