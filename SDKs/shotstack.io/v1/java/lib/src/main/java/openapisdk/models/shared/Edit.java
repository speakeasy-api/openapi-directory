package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Edit
 * An edit defines the arrangement of a video on a timeline, an audio edit or an image design and the output format.
**/
public class Edit {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callback")
    public String callback;
    public Edit withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disk")
    public EditDiskEnum disk;
    public Edit withDisk(EditDiskEnum disk) {
        this.disk = disk;
        return this;
    }
    @JsonProperty("output")
    public Output output;
    public Edit withOutput(Output output) {
        this.output = output;
        return this;
    }
    @JsonProperty("timeline")
    public Timeline timeline;
    public Edit withTimeline(Timeline timeline) {
        this.timeline = timeline;
        return this;
    }
}