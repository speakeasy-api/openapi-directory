package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LunInput
 * A storage volume logical unit number (LUN).
**/
public class LunInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bootLun")
    public Boolean bootLun;
    public LunInput withBootLun(Boolean bootLun) {
        this.bootLun = bootLun;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public LunInput withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multiprotocolType")
    public LunMultiprotocolTypeEnum multiprotocolType;
    public LunInput withMultiprotocolType(LunMultiprotocolTypeEnum multiprotocolType) {
        this.multiprotocolType = multiprotocolType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shareable")
    public Boolean shareable;
    public LunInput withShareable(Boolean shareable) {
        this.shareable = shareable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sizeGb")
    public String sizeGb;
    public LunInput withSizeGb(String sizeGb) {
        this.sizeGb = sizeGb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public LunStateEnum state;
    public LunInput withState(LunStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storageType")
    public LunStorageTypeEnum storageType;
    public LunInput withStorageType(LunStorageTypeEnum storageType) {
        this.storageType = storageType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storageVolume")
    public String storageVolume;
    public LunInput withStorageVolume(String storageVolume) {
        this.storageVolume = storageVolume;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wwid")
    public String wwid;
    public LunInput withWwid(String wwid) {
        this.wwid = wwid;
        return this;
    }
}