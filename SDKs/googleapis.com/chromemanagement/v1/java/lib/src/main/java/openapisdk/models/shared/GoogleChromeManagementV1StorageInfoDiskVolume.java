package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleChromeManagementV1StorageInfoDiskVolume
 * Information for disk volumes
**/
public class GoogleChromeManagementV1StorageInfoDiskVolume {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storageFreeBytes")
    public String storageFreeBytes;
    public GoogleChromeManagementV1StorageInfoDiskVolume withStorageFreeBytes(String storageFreeBytes) {
        this.storageFreeBytes = storageFreeBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storageTotalBytes")
    public String storageTotalBytes;
    public GoogleChromeManagementV1StorageInfoDiskVolume withStorageTotalBytes(String storageTotalBytes) {
        this.storageTotalBytes = storageTotalBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumeId")
    public String volumeId;
    public GoogleChromeManagementV1StorageInfoDiskVolume withVolumeId(String volumeId) {
        this.volumeId = volumeId;
        return this;
    }
}