package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BucketIamConfiguration
 * The bucket's IAM configuration.
**/
public class BucketIamConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketPolicyOnly")
    public BucketIamConfigurationBucketPolicyOnly bucketPolicyOnly;
    public BucketIamConfiguration withBucketPolicyOnly(BucketIamConfigurationBucketPolicyOnly bucketPolicyOnly) {
        this.bucketPolicyOnly = bucketPolicyOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicAccessPrevention")
    public String publicAccessPrevention;
    public BucketIamConfiguration withPublicAccessPrevention(String publicAccessPrevention) {
        this.publicAccessPrevention = publicAccessPrevention;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uniformBucketLevelAccess")
    public BucketIamConfigurationUniformBucketLevelAccess uniformBucketLevelAccess;
    public BucketIamConfiguration withUniformBucketLevelAccess(BucketIamConfigurationUniformBucketLevelAccess uniformBucketLevelAccess) {
        this.uniformBucketLevelAccess = uniformBucketLevelAccess;
        return this;
    }
}