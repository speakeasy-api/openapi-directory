package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsSourceVmDetails
 * Represent the source AWS VM details.
**/
public class AwsSourceVmDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committedStorageBytes")
    public String committedStorageBytes;
    public AwsSourceVmDetails withCommittedStorageBytes(String committedStorageBytes) {
        this.committedStorageBytes = committedStorageBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firmware")
    public AwsSourceVmDetailsFirmwareEnum firmware;
    public AwsSourceVmDetails withFirmware(AwsSourceVmDetailsFirmwareEnum firmware) {
        this.firmware = firmware;
        return this;
    }
}