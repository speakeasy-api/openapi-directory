package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1SequentialSegment
 * Start and end position in a sequence (e.g. text segment).
**/
public class GoogleCloudDatalabelingV1beta1SequentialSegment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end")
    public Integer end;
    public GoogleCloudDatalabelingV1beta1SequentialSegment withEnd(Integer end) {
        this.end = end;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start")
    public Integer start;
    public GoogleCloudDatalabelingV1beta1SequentialSegment withStart(Integer start) {
        this.start = start;
        return this;
    }
}