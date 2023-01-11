package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExistingDisk
 * A pre-existing persistent disk that will be attached to every Replica in the Pool in READ_ONLY mode.
**/
public class ExistingDisk {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attachment")
    public DiskAttachment attachment;
    public ExistingDisk withAttachment(DiskAttachment attachment) {
        this.attachment = attachment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public ExistingDisk withSource(String source) {
        this.source = source;
        return this;
    }
}