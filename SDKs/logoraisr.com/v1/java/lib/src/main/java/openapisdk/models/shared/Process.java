package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Process {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("crop")
    public String crop;
    public Process withCrop(String crop) {
        this.crop = crop;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flip")
    public Boolean flip;
    public Process withFlip(Boolean flip) {
        this.flip = flip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mirror")
    public Boolean mirror;
    public Process withMirror(Boolean mirror) {
        this.mirror = mirror;
        return this;
    }
    @JsonProperty("processing_algorithm")
    public String processingAlgorithm;
    public Process withProcessingAlgorithm(String processingAlgorithm) {
        this.processingAlgorithm = processingAlgorithm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resize")
    public String resize;
    public Process withResize(String resize) {
        this.resize = resize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rotate")
    public Long rotate;
    public Process withRotate(Long rotate) {
        this.rotate = rotate;
        return this;
    }
}