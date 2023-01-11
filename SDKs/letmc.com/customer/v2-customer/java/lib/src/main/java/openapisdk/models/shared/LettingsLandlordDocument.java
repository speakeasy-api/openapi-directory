package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LettingsLandlordDocument
 * Document details.
**/
public class LettingsLandlordDocument {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FileName")
    public String fileName;
    public LettingsLandlordDocument withFileName(String fileName) {
        this.fileName = fileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FileSize")
    public Integer fileSize;
    public LettingsLandlordDocument withFileSize(Integer fileSize) {
        this.fileSize = fileSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ID")
    public String id;
    public LettingsLandlordDocument withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MIMEType")
    public String mimeType;
    public LettingsLandlordDocument withMimeType(String mimeType) {
        this.mimeType = mimeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Note")
    public String note;
    public LettingsLandlordDocument withNote(String note) {
        this.note = note;
        return this;
    }
}