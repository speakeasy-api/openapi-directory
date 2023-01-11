package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VideoV1CompositionSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public VideoV1CompositionSettings withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aws_credentials_sid")
    public String awsCredentialsSid;
    public VideoV1CompositionSettings withAwsCredentialsSid(String awsCredentialsSid) {
        this.awsCredentialsSid = awsCredentialsSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aws_s3_url")
    public String awsS3Url;
    public VideoV1CompositionSettings withAwsS3Url(String awsS3Url) {
        this.awsS3Url = awsS3Url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aws_storage_enabled")
    public Boolean awsStorageEnabled;
    public VideoV1CompositionSettings withAwsStorageEnabled(Boolean awsStorageEnabled) {
        this.awsStorageEnabled = awsStorageEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryption_enabled")
    public Boolean encryptionEnabled;
    public VideoV1CompositionSettings withEncryptionEnabled(Boolean encryptionEnabled) {
        this.encryptionEnabled = encryptionEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryption_key_sid")
    public String encryptionKeySid;
    public VideoV1CompositionSettings withEncryptionKeySid(String encryptionKeySid) {
        this.encryptionKeySid = encryptionKeySid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendly_name")
    public String friendlyName;
    public VideoV1CompositionSettings withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public VideoV1CompositionSettings withUrl(String url) {
        this.url = url;
        return this;
    }
}