package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FileIndexableText
 * Indexable text attributes for the file (can only be written). For more information, see Manage file metadata.
**/
public class FileIndexableText {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public FileIndexableText withText(String text) {
        this.text = text;
        return this;
    }
}