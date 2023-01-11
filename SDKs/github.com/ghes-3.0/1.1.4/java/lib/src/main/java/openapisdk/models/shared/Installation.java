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
 * Installation
 * Installation
**/
public class Installation {
    @JsonProperty("access_tokens_url")
    public String accessTokensUrl;
    public Installation withAccessTokensUrl(String accessTokensUrl) {
        this.accessTokensUrl = accessTokensUrl;
        return this;
    }
    @JsonProperty("account")
    public Object account;
    public Installation withAccount(Object account) {
        this.account = account;
        return this;
    }
    @JsonProperty("app_id")
    public Long appId;
    public Installation withAppId(Long appId) {
        this.appId = appId;
        return this;
    }
    @JsonProperty("app_slug")
    public String appSlug;
    public Installation withAppSlug(String appSlug) {
        this.appSlug = appSlug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contact_email")
    public String contactEmail;
    public Installation withContactEmail(String contactEmail) {
        this.contactEmail = contactEmail;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public Installation withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("events")
    public String[] events;
    public Installation withEvents(String[] events) {
        this.events = events;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_multiple_single_files")
    public Boolean hasMultipleSingleFiles;
    public Installation withHasMultipleSingleFiles(Boolean hasMultipleSingleFiles) {
        this.hasMultipleSingleFiles = hasMultipleSingleFiles;
        return this;
    }
    @JsonProperty("html_url")
    public String htmlUrl;
    public Installation withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public Installation withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("permissions")
    public InstallationPermissions permissions;
    public Installation withPermissions(InstallationPermissions permissions) {
        this.permissions = permissions;
        return this;
    }
    @JsonProperty("repositories_url")
    public String repositoriesUrl;
    public Installation withRepositoriesUrl(String repositoriesUrl) {
        this.repositoriesUrl = repositoriesUrl;
        return this;
    }
    @JsonProperty("repository_selection")
    public InstallationRepositorySelectionEnum repositorySelection;
    public Installation withRepositorySelection(InstallationRepositorySelectionEnum repositorySelection) {
        this.repositorySelection = repositorySelection;
        return this;
    }
    @JsonProperty("single_file_name")
    public String singleFileName;
    public Installation withSingleFileName(String singleFileName) {
        this.singleFileName = singleFileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("single_file_paths")
    public String[] singleFilePaths;
    public Installation withSingleFilePaths(String[] singleFilePaths) {
        this.singleFilePaths = singleFilePaths;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("suspended_at")
    public OffsetDateTime suspendedAt;
    public Installation withSuspendedAt(OffsetDateTime suspendedAt) {
        this.suspendedAt = suspendedAt;
        return this;
    }
    @JsonProperty("suspended_by")
    public InstallationSimpleUser suspendedBy;
    public Installation withSuspendedBy(InstallationSimpleUser suspendedBy) {
        this.suspendedBy = suspendedBy;
        return this;
    }
    @JsonProperty("target_id")
    public Long targetId;
    public Installation withTargetId(Long targetId) {
        this.targetId = targetId;
        return this;
    }
    @JsonProperty("target_type")
    public String targetType;
    public Installation withTargetType(String targetType) {
        this.targetType = targetType;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public Installation withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}