package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * BucketIamConfigurationUniformBucketLevelAccess
 * The bucket's uniform bucket-level access configuration.
**/
public class BucketIamConfigurationUniformBucketLevelAccess {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public BucketIamConfigurationUniformBucketLevelAccess withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lockedTime")
    public OffsetDateTime lockedTime;
    public BucketIamConfigurationUniformBucketLevelAccess withLockedTime(OffsetDateTime lockedTime) {
        this.lockedTime = lockedTime;
        return this;
    }
}