package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StackFrames
 * A collection of stack frames, which can be truncated.
**/
public class StackFrames {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("droppedFramesCount")
    public Integer droppedFramesCount;
    public StackFrames withDroppedFramesCount(Integer droppedFramesCount) {
        this.droppedFramesCount = droppedFramesCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frame")
    public StackFrame[] frame;
    public StackFrames withFrame(StackFrame[] frame) {
        this.frame = frame;
        return this;
    }
}