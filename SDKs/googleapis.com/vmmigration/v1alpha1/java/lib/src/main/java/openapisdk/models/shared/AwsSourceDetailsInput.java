package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsSourceDetailsInput
 * AwsSourceDetails message describes a specific source details for the AWS source type.
**/
public class AwsSourceDetailsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessKeyCreds")
    public AccessKeyCredentials accessKeyCreds;
    public AwsSourceDetailsInput withAccessKeyCreds(AccessKeyCredentials accessKeyCreds) {
        this.accessKeyCreds = accessKeyCreds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessKeyId")
    public String accessKeyId;
    public AwsSourceDetailsInput withAccessKeyId(String accessKeyId) {
        this.accessKeyId = accessKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsRegion")
    public String awsRegion;
    public AwsSourceDetailsInput withAwsRegion(String awsRegion) {
        this.awsRegion = awsRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Status error;
    public AwsSourceDetailsInput withError(Status error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventorySecurityGroupNames")
    public String[] inventorySecurityGroupNames;
    public AwsSourceDetailsInput withInventorySecurityGroupNames(String[] inventorySecurityGroupNames) {
        this.inventorySecurityGroupNames = inventorySecurityGroupNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventoryTagList")
    public Tag[] inventoryTagList;
    public AwsSourceDetailsInput withInventoryTagList(Tag[] inventoryTagList) {
        this.inventoryTagList = inventoryTagList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventoryTags")
    public java.util.Map<String, String> inventoryTags;
    public AwsSourceDetailsInput withInventoryTags(java.util.Map<String, String> inventoryTags) {
        this.inventoryTags = inventoryTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("migrationResourcesUserTags")
    public java.util.Map<String, String> migrationResourcesUserTags;
    public AwsSourceDetailsInput withMigrationResourcesUserTags(java.util.Map<String, String> migrationResourcesUserTags) {
        this.migrationResourcesUserTags = migrationResourcesUserTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secretAccessKey")
    public String secretAccessKey;
    public AwsSourceDetailsInput withSecretAccessKey(String secretAccessKey) {
        this.secretAccessKey = secretAccessKey;
        return this;
    }
}