package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Volume
 * Carries information about storage that can be attached to a VM. Specify either `Volume` or `Disk`, but not both.
**/
public class Volume {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("existingDisk")
    public ExistingDisk existingDisk;
    public Volume withExistingDisk(ExistingDisk existingDisk) {
        this.existingDisk = existingDisk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nfsMount")
    public NfsMount nfsMount;
    public Volume withNfsMount(NfsMount nfsMount) {
        this.nfsMount = nfsMount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("persistentDisk")
    public PersistentDisk persistentDisk;
    public Volume withPersistentDisk(PersistentDisk persistentDisk) {
        this.persistentDisk = persistentDisk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volume")
    public String volume;
    public Volume withVolume(String volume) {
        this.volume = volume;
        return this;
    }
}