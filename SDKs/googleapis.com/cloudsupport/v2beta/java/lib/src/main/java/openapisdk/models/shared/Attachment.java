package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Attachment
 * Represents a file attached to a support case.
**/
public class Attachment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Attachment withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creator")
    public Actor creator;
    public Attachment withCreator(Actor creator) {
        this.creator = creator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filename")
    public String filename;
    public Attachment withFilename(String filename) {
        this.filename = filename;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mimeType")
    public String mimeType;
    public Attachment withMimeType(String mimeType) {
        this.mimeType = mimeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Attachment withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sizeBytes")
    public String sizeBytes;
    public Attachment withSizeBytes(String sizeBytes) {
        this.sizeBytes = sizeBytes;
        return this;
    }
}