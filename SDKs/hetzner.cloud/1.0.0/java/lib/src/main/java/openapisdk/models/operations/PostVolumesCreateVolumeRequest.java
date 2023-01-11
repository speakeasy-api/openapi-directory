package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostVolumesCreateVolumeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("automount")
    public Boolean automount;
    public PostVolumesCreateVolumeRequest withAutomount(Boolean automount) {
        this.automount = automount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public String format;
    public PostVolumesCreateVolumeRequest withFormat(String format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, Object> labels;
    public PostVolumesCreateVolumeRequest withLabels(java.util.Map<String, Object> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public PostVolumesCreateVolumeRequest withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PostVolumesCreateVolumeRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("server")
    public Long server;
    public PostVolumesCreateVolumeRequest withServer(Long server) {
        this.server = server;
        return this;
    }
    @JsonProperty("size")
    public Long size;
    public PostVolumesCreateVolumeRequest withSize(Long size) {
        this.size = size;
        return this;
    }
}