package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutVolumesId200ApplicationJsonVolume {
    @JsonProperty("created")
    public String created;
    public PutVolumesId200ApplicationJsonVolume withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonProperty("format")
    public String format;
    public PutVolumesId200ApplicationJsonVolume withFormat(String format) {
        this.format = format;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PutVolumesId200ApplicationJsonVolume withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public PutVolumesId200ApplicationJsonVolume withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("linux_device")
    public String linuxDevice;
    public PutVolumesId200ApplicationJsonVolume withLinuxDevice(String linuxDevice) {
        this.linuxDevice = linuxDevice;
        return this;
    }
    @JsonProperty("location")
    public PutVolumesId200ApplicationJsonVolumeLocation location;
    public PutVolumesId200ApplicationJsonVolume withLocation(PutVolumesId200ApplicationJsonVolumeLocation location) {
        this.location = location;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PutVolumesId200ApplicationJsonVolume withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("protection")
    public PutVolumesId200ApplicationJsonVolumeProtection protection;
    public PutVolumesId200ApplicationJsonVolume withProtection(PutVolumesId200ApplicationJsonVolumeProtection protection) {
        this.protection = protection;
        return this;
    }
    @JsonProperty("server")
    public Long server;
    public PutVolumesId200ApplicationJsonVolume withServer(Long server) {
        this.server = server;
        return this;
    }
    @JsonProperty("size")
    public Double size;
    public PutVolumesId200ApplicationJsonVolume withSize(Double size) {
        this.size = size;
        return this;
    }
    @JsonProperty("status")
    public PutVolumesId200ApplicationJsonVolumeStatusEnum status;
    public PutVolumesId200ApplicationJsonVolume withStatus(PutVolumesId200ApplicationJsonVolumeStatusEnum status) {
        this.status = status;
        return this;
    }
}