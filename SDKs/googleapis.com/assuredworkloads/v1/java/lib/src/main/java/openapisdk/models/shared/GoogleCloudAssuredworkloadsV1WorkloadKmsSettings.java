package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudAssuredworkloadsV1WorkloadKmsSettings
 * Settings specific to the Key Management Service. This message is deprecated. In order to create a Keyring, callers should specify, ENCRYPTION_KEYS_PROJECT or KEYRING in ResourceSettings.resource_type field.
**/
public class GoogleCloudAssuredworkloadsV1WorkloadKmsSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextRotationTime")
    public String nextRotationTime;
    public GoogleCloudAssuredworkloadsV1WorkloadKmsSettings withNextRotationTime(String nextRotationTime) {
        this.nextRotationTime = nextRotationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rotationPeriod")
    public String rotationPeriod;
    public GoogleCloudAssuredworkloadsV1WorkloadKmsSettings withRotationPeriod(String rotationPeriod) {
        this.rotationPeriod = rotationPeriod;
        return this;
    }
}