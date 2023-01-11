package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Manifest
 * Manifest configuration.
**/
public class Manifest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileName")
    public String fileName;
    public Manifest withFileName(String fileName) {
        this.fileName = fileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("muxStreams")
    public String[] muxStreams;
    public Manifest withMuxStreams(String[] muxStreams) {
        this.muxStreams = muxStreams;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ManifestTypeEnum type;
    public Manifest withType(ManifestTypeEnum type) {
        this.type = type;
        return this;
    }
}