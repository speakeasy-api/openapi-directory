package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetVolumesId200ApplicationJsonVolume {
    @JsonProperty("created")
    public String created;
    public GetVolumesId200ApplicationJsonVolume withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonProperty("format")
    public String format;
    public GetVolumesId200ApplicationJsonVolume withFormat(String format) {
        this.format = format;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetVolumesId200ApplicationJsonVolume withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public GetVolumesId200ApplicationJsonVolume withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("linux_device")
    public String linuxDevice;
    public GetVolumesId200ApplicationJsonVolume withLinuxDevice(String linuxDevice) {
        this.linuxDevice = linuxDevice;
        return this;
    }
    @JsonProperty("location")
    public GetVolumesId200ApplicationJsonVolumeLocation location;
    public GetVolumesId200ApplicationJsonVolume withLocation(GetVolumesId200ApplicationJsonVolumeLocation location) {
        this.location = location;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetVolumesId200ApplicationJsonVolume withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("protection")
    public GetVolumesId200ApplicationJsonVolumeProtection protection;
    public GetVolumesId200ApplicationJsonVolume withProtection(GetVolumesId200ApplicationJsonVolumeProtection protection) {
        this.protection = protection;
        return this;
    }
    @JsonProperty("server")
    public Long server;
    public GetVolumesId200ApplicationJsonVolume withServer(Long server) {
        this.server = server;
        return this;
    }
    @JsonProperty("size")
    public Double size;
    public GetVolumesId200ApplicationJsonVolume withSize(Double size) {
        this.size = size;
        return this;
    }
    @JsonProperty("status")
    public GetVolumesId200ApplicationJsonVolumeStatusEnum status;
    public GetVolumesId200ApplicationJsonVolume withStatus(GetVolumesId200ApplicationJsonVolumeStatusEnum status) {
        this.status = status;
        return this;
    }
}