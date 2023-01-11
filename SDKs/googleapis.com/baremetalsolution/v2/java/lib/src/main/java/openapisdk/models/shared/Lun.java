package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Lun
 * A storage volume logical unit number (LUN).
**/
public class Lun {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bootLun")
    public Boolean bootLun;
    public Lun withBootLun(Boolean bootLun) {
        this.bootLun = bootLun;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Lun withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multiprotocolType")
    public LunMultiprotocolTypeEnum multiprotocolType;
    public Lun withMultiprotocolType(LunMultiprotocolTypeEnum multiprotocolType) {
        this.multiprotocolType = multiprotocolType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Lun withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shareable")
    public Boolean shareable;
    public Lun withShareable(Boolean shareable) {
        this.shareable = shareable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sizeGb")
    public String sizeGb;
    public Lun withSizeGb(String sizeGb) {
        this.sizeGb = sizeGb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public LunStateEnum state;
    public Lun withState(LunStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storageType")
    public LunStorageTypeEnum storageType;
    public Lun withStorageType(LunStorageTypeEnum storageType) {
        this.storageType = storageType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storageVolume")
    public String storageVolume;
    public Lun withStorageVolume(String storageVolume) {
        this.storageVolume = storageVolume;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wwid")
    public String wwid;
    public Lun withWwid(String wwid) {
        this.wwid = wwid;
        return this;
    }
}