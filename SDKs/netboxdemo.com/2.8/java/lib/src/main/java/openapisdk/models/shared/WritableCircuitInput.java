package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WritableCircuitInput {
    @JsonProperty("cid")
    public String cid;
    public WritableCircuitInput withCid(String cid) {
        this.cid = cid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public String comments;
    public WritableCircuitInput withComments(String comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commit_rate")
    public Long commitRate;
    public WritableCircuitInput withCommitRate(Long commitRate) {
        this.commitRate = commitRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_fields")
    public java.util.Map<String, Object> customFields;
    public WritableCircuitInput withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public WritableCircuitInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("install_date")
    public LocalDate installDate;
    public WritableCircuitInput withInstallDate(LocalDate installDate) {
        this.installDate = installDate;
        return this;
    }
    @JsonProperty("provider")
    public Long provider;
    public WritableCircuitInput withProvider(Long provider) {
        this.provider = provider;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public WritableCircuitStatusEnum status;
    public WritableCircuitInput withStatus(WritableCircuitStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public WritableCircuitInput withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tenant")
    public Long tenant;
    public WritableCircuitInput withTenant(Long tenant) {
        this.tenant = tenant;
        return this;
    }
    @JsonProperty("type")
    public Long type;
    public WritableCircuitInput withType(Long type) {
        this.type = type;
        return this;
    }
}