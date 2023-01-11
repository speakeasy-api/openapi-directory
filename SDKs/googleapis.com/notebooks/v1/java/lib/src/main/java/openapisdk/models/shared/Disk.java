package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Disk
 * An instance-attached disk resource.
**/
public class Disk {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoDelete")
    public Boolean autoDelete;
    public Disk withAutoDelete(Boolean autoDelete) {
        this.autoDelete = autoDelete;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("boot")
    public Boolean boot;
    public Disk withBoot(Boolean boot) {
        this.boot = boot;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceName")
    public String deviceName;
    public Disk withDeviceName(String deviceName) {
        this.deviceName = deviceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diskSizeGb")
    public String diskSizeGb;
    public Disk withDiskSizeGb(String diskSizeGb) {
        this.diskSizeGb = diskSizeGb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guestOsFeatures")
    public GuestOsFeature[] guestOsFeatures;
    public Disk withGuestOsFeatures(GuestOsFeature[] guestOsFeatures) {
        this.guestOsFeatures = guestOsFeatures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("index")
    public String index;
    public Disk withIndex(String index) {
        this.index = index;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interface")
    public String interface_;
    public Disk withInterface(String interface_) {
        this.interface_ = interface_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Disk withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("licenses")
    public String[] licenses;
    public Disk withLicenses(String[] licenses) {
        this.licenses = licenses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mode")
    public String mode;
    public Disk withMode(String mode) {
        this.mode = mode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public Disk withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public Disk withType(String type) {
        this.type = type;
        return this;
    }
}