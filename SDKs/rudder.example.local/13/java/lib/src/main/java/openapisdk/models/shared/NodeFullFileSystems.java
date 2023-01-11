package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NodeFullFileSystems {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public NodeFullFileSystems withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileCount")
    public Long fileCount;
    public NodeFullFileSystems withFileCount(Long fileCount) {
        this.fileCount = fileCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("freeSpace")
    public Long freeSpace;
    public NodeFullFileSystems withFreeSpace(Long freeSpace) {
        this.freeSpace = freeSpace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mountPoint")
    public String mountPoint;
    public NodeFullFileSystems withMountPoint(String mountPoint) {
        this.mountPoint = mountPoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public NodeFullFileSystems withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalSpace")
    public Long totalSpace;
    public NodeFullFileSystems withTotalSpace(Long totalSpace) {
        this.totalSpace = totalSpace;
        return this;
    }
}