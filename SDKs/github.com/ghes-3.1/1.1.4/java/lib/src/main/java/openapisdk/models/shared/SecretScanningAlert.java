package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class SecretScanningAlert {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public SecretScanningAlert withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("html_url")
    public String htmlUrl;
    public SecretScanningAlert withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public Long number;
    public SecretScanningAlert withNumber(Long number) {
        this.number = number;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resolution")
    public SecretScanningAlertResolutionEnum resolution;
    public SecretScanningAlert withResolution(SecretScanningAlertResolutionEnum resolution) {
        this.resolution = resolution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("resolved_at")
    public OffsetDateTime resolvedAt;
    public SecretScanningAlert withResolvedAt(OffsetDateTime resolvedAt) {
        this.resolvedAt = resolvedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resolved_by")
    public SimpleUser resolvedBy;
    public SecretScanningAlert withResolvedBy(SimpleUser resolvedBy) {
        this.resolvedBy = resolvedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public SecretScanningAlert withSecret(String secret) {
        this.secret = secret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret_type")
    public String secretType;
    public SecretScanningAlert withSecretType(String secretType) {
        this.secretType = secretType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public SecretScanningAlertStateEnum state;
    public SecretScanningAlert withState(SecretScanningAlertStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public SecretScanningAlert withUrl(String url) {
        this.url = url;
        return this;
    }
}