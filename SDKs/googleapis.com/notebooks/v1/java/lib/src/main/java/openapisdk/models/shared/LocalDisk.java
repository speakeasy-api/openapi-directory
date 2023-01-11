package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LocalDisk
 * A Local attached disk resource.
**/
public class LocalDisk {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoDelete")
    public Boolean autoDelete;
    public LocalDisk withAutoDelete(Boolean autoDelete) {
        this.autoDelete = autoDelete;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("boot")
    public Boolean boot;
    public LocalDisk withBoot(Boolean boot) {
        this.boot = boot;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceName")
    public String deviceName;
    public LocalDisk withDeviceName(String deviceName) {
        this.deviceName = deviceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guestOsFeatures")
    public RuntimeGuestOsFeature[] guestOsFeatures;
    public LocalDisk withGuestOsFeatures(RuntimeGuestOsFeature[] guestOsFeatures) {
        this.guestOsFeatures = guestOsFeatures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("index")
    public Integer index;
    public LocalDisk withIndex(Integer index) {
        this.index = index;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initializeParams")
    public LocalDiskInitializeParams initializeParams;
    public LocalDisk withInitializeParams(LocalDiskInitializeParams initializeParams) {
        this.initializeParams = initializeParams;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interface")
    public String interface_;
    public LocalDisk withInterface(String interface_) {
        this.interface_ = interface_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public LocalDisk withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("licenses")
    public String[] licenses;
    public LocalDisk withLicenses(String[] licenses) {
        this.licenses = licenses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mode")
    public String mode;
    public LocalDisk withMode(String mode) {
        this.mode = mode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public LocalDisk withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public LocalDisk withType(String type) {
        this.type = type;
        return this;
    }
}