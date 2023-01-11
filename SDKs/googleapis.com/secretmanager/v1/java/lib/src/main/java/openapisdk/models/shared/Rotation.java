package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Rotation
 * The rotation time and period for a Secret. At next_rotation_time, Secret Manager will send a Pub/Sub notification to the topics configured on the Secret. Secret.topics must be set to configure rotation.
**/
public class Rotation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextRotationTime")
    public String nextRotationTime;
    public Rotation withNextRotationTime(String nextRotationTime) {
        this.nextRotationTime = nextRotationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rotationPeriod")
    public String rotationPeriod;
    public Rotation withRotationPeriod(String rotationPeriod) {
        this.rotationPeriod = rotationPeriod;
        return this;
    }
}