package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleChromeManagementV1DiskInfo
 * Status of the single storage device.
**/
public class GoogleChromeManagementV1DiskInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bytesReadThisSession")
    public String bytesReadThisSession;
    public GoogleChromeManagementV1DiskInfo withBytesReadThisSession(String bytesReadThisSession) {
        this.bytesReadThisSession = bytesReadThisSession;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bytesWrittenThisSession")
    public String bytesWrittenThisSession;
    public GoogleChromeManagementV1DiskInfo withBytesWrittenThisSession(String bytesWrittenThisSession) {
        this.bytesWrittenThisSession = bytesWrittenThisSession;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discardTimeThisSession")
    public String discardTimeThisSession;
    public GoogleChromeManagementV1DiskInfo withDiscardTimeThisSession(String discardTimeThisSession) {
        this.discardTimeThisSession = discardTimeThisSession;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("health")
    public String health;
    public GoogleChromeManagementV1DiskInfo withHealth(String health) {
        this.health = health;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ioTimeThisSession")
    public String ioTimeThisSession;
    public GoogleChromeManagementV1DiskInfo withIoTimeThisSession(String ioTimeThisSession) {
        this.ioTimeThisSession = ioTimeThisSession;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manufacturer")
    public String manufacturer;
    public GoogleChromeManagementV1DiskInfo withManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model")
    public String model;
    public GoogleChromeManagementV1DiskInfo withModel(String model) {
        this.model = model;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readTimeThisSession")
    public String readTimeThisSession;
    public GoogleChromeManagementV1DiskInfo withReadTimeThisSession(String readTimeThisSession) {
        this.readTimeThisSession = readTimeThisSession;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serialNumber")
    public String serialNumber;
    public GoogleChromeManagementV1DiskInfo withSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sizeBytes")
    public String sizeBytes;
    public GoogleChromeManagementV1DiskInfo withSizeBytes(String sizeBytes) {
        this.sizeBytes = sizeBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public GoogleChromeManagementV1DiskInfo withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumeIds")
    public String[] volumeIds;
    public GoogleChromeManagementV1DiskInfo withVolumeIds(String[] volumeIds) {
        this.volumeIds = volumeIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("writeTimeThisSession")
    public String writeTimeThisSession;
    public GoogleChromeManagementV1DiskInfo withWriteTimeThisSession(String writeTimeThisSession) {
        this.writeTimeThisSession = writeTimeThisSession;
        return this;
    }
}