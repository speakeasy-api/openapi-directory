package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostVolumes201ApplicationJsonVolume {
    @JsonProperty("created")
    public String created;
    public PostVolumes201ApplicationJsonVolume withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonProperty("format")
    public String format;
    public PostVolumes201ApplicationJsonVolume withFormat(String format) {
        this.format = format;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostVolumes201ApplicationJsonVolume withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public PostVolumes201ApplicationJsonVolume withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("linux_device")
    public String linuxDevice;
    public PostVolumes201ApplicationJsonVolume withLinuxDevice(String linuxDevice) {
        this.linuxDevice = linuxDevice;
        return this;
    }
    @JsonProperty("location")
    public PostVolumes201ApplicationJsonVolumeLocation location;
    public PostVolumes201ApplicationJsonVolume withLocation(PostVolumes201ApplicationJsonVolumeLocation location) {
        this.location = location;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PostVolumes201ApplicationJsonVolume withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("protection")
    public PostVolumes201ApplicationJsonVolumeProtection protection;
    public PostVolumes201ApplicationJsonVolume withProtection(PostVolumes201ApplicationJsonVolumeProtection protection) {
        this.protection = protection;
        return this;
    }
    @JsonProperty("server")
    public Long server;
    public PostVolumes201ApplicationJsonVolume withServer(Long server) {
        this.server = server;
        return this;
    }
    @JsonProperty("size")
    public Double size;
    public PostVolumes201ApplicationJsonVolume withSize(Double size) {
        this.size = size;
        return this;
    }
    @JsonProperty("status")
    public PostVolumes201ApplicationJsonVolumeStatusEnum status;
    public PostVolumes201ApplicationJsonVolume withStatus(PostVolumes201ApplicationJsonVolumeStatusEnum status) {
        this.status = status;
        return this;
    }
}