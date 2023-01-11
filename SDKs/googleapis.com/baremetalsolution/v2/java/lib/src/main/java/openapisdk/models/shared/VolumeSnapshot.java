package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VolumeSnapshot
 * A snapshot of a volume. Only boot volumes can have snapshots.
**/
public class VolumeSnapshot {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public VolumeSnapshot withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public VolumeSnapshot withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public VolumeSnapshot withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public VolumeSnapshot withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storageVolume")
    public String storageVolume;
    public VolumeSnapshot withStorageVolume(String storageVolume) {
        this.storageVolume = storageVolume;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public VolumeSnapshotTypeEnum type;
    public VolumeSnapshot withType(VolumeSnapshotTypeEnum type) {
        this.type = type;
        return this;
    }
}