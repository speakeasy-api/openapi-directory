package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AppsScopeTokenRequestBody {
    @JsonProperty("access_token")
    public String accessToken;
    public AppsScopeTokenRequestBody withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public openapisdk.models.shared.AppPermissions permissions;
    public AppsScopeTokenRequestBody withPermissions(openapisdk.models.shared.AppPermissions permissions) {
        this.permissions = permissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repositories")
    public String[] repositories;
    public AppsScopeTokenRequestBody withRepositories(String[] repositories) {
        this.repositories = repositories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repository_ids")
    public Long[] repositoryIds;
    public AppsScopeTokenRequestBody withRepositoryIds(Long[] repositoryIds) {
        this.repositoryIds = repositoryIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target")
    public String target;
    public AppsScopeTokenRequestBody withTarget(String target) {
        this.target = target;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target_id")
    public Long targetId;
    public AppsScopeTokenRequestBody withTargetId(Long targetId) {
        this.targetId = targetId;
        return this;
    }
}