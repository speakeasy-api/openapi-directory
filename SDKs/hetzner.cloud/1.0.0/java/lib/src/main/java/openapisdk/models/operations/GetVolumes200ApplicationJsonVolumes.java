package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetVolumes200ApplicationJsonVolumes {
    @JsonProperty("created")
    public String created;
    public GetVolumes200ApplicationJsonVolumes withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonProperty("format")
    public String format;
    public GetVolumes200ApplicationJsonVolumes withFormat(String format) {
        this.format = format;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetVolumes200ApplicationJsonVolumes withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public GetVolumes200ApplicationJsonVolumes withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("linux_device")
    public String linuxDevice;
    public GetVolumes200ApplicationJsonVolumes withLinuxDevice(String linuxDevice) {
        this.linuxDevice = linuxDevice;
        return this;
    }
    @JsonProperty("location")
    public GetVolumes200ApplicationJsonVolumesLocation location;
    public GetVolumes200ApplicationJsonVolumes withLocation(GetVolumes200ApplicationJsonVolumesLocation location) {
        this.location = location;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetVolumes200ApplicationJsonVolumes withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("protection")
    public GetVolumes200ApplicationJsonVolumesProtection protection;
    public GetVolumes200ApplicationJsonVolumes withProtection(GetVolumes200ApplicationJsonVolumesProtection protection) {
        this.protection = protection;
        return this;
    }
    @JsonProperty("server")
    public Long server;
    public GetVolumes200ApplicationJsonVolumes withServer(Long server) {
        this.server = server;
        return this;
    }
    @JsonProperty("size")
    public Double size;
    public GetVolumes200ApplicationJsonVolumes withSize(Double size) {
        this.size = size;
        return this;
    }
    @JsonProperty("status")
    public GetVolumes200ApplicationJsonVolumesStatusEnum status;
    public GetVolumes200ApplicationJsonVolumes withStatus(GetVolumes200ApplicationJsonVolumesStatusEnum status) {
        this.status = status;
        return this;
    }
}