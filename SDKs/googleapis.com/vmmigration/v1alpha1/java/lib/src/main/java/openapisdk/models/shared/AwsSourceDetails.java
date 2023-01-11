package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsSourceDetails
 * AwsSourceDetails message describes a specific source details for the AWS source type.
**/
public class AwsSourceDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessKeyCreds")
    public AccessKeyCredentials accessKeyCreds;
    public AwsSourceDetails withAccessKeyCreds(AccessKeyCredentials accessKeyCreds) {
        this.accessKeyCreds = accessKeyCreds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessKeyId")
    public String accessKeyId;
    public AwsSourceDetails withAccessKeyId(String accessKeyId) {
        this.accessKeyId = accessKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsRegion")
    public String awsRegion;
    public AwsSourceDetails withAwsRegion(String awsRegion) {
        this.awsRegion = awsRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Status error;
    public AwsSourceDetails withError(Status error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventorySecurityGroupNames")
    public String[] inventorySecurityGroupNames;
    public AwsSourceDetails withInventorySecurityGroupNames(String[] inventorySecurityGroupNames) {
        this.inventorySecurityGroupNames = inventorySecurityGroupNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventoryTagList")
    public Tag[] inventoryTagList;
    public AwsSourceDetails withInventoryTagList(Tag[] inventoryTagList) {
        this.inventoryTagList = inventoryTagList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventoryTags")
    public java.util.Map<String, String> inventoryTags;
    public AwsSourceDetails withInventoryTags(java.util.Map<String, String> inventoryTags) {
        this.inventoryTags = inventoryTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("migrationResourcesUserTags")
    public java.util.Map<String, String> migrationResourcesUserTags;
    public AwsSourceDetails withMigrationResourcesUserTags(java.util.Map<String, String> migrationResourcesUserTags) {
        this.migrationResourcesUserTags = migrationResourcesUserTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicIp")
    public String publicIp;
    public AwsSourceDetails withPublicIp(String publicIp) {
        this.publicIp = publicIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secretAccessKey")
    public String secretAccessKey;
    public AwsSourceDetails withSecretAccessKey(String secretAccessKey) {
        this.secretAccessKey = secretAccessKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public AwsSourceDetailsStateEnum state;
    public AwsSourceDetails withState(AwsSourceDetailsStateEnum state) {
        this.state = state;
        return this;
    }
}