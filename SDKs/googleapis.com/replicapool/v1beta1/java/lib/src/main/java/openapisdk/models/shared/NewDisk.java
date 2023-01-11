package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NewDisk
 * A Persistent Disk resource that will be created and attached to each Replica in the Pool. Each Replica will have a unique persistent disk that is created and attached to that Replica in READ_WRITE mode.
**/
public class NewDisk {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attachment")
    public DiskAttachment attachment;
    public NewDisk withAttachment(DiskAttachment attachment) {
        this.attachment = attachment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoDelete")
    public Boolean autoDelete;
    public NewDisk withAutoDelete(Boolean autoDelete) {
        this.autoDelete = autoDelete;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("boot")
    public Boolean boot;
    public NewDisk withBoot(Boolean boot) {
        this.boot = boot;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initializeParams")
    public NewDiskInitializeParams initializeParams;
    public NewDisk withInitializeParams(NewDiskInitializeParams initializeParams) {
        this.initializeParams = initializeParams;
        return this;
    }
}