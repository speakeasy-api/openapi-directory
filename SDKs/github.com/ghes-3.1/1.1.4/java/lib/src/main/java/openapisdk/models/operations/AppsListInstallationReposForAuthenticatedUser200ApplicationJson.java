package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AppsListInstallationReposForAuthenticatedUser200ApplicationJson {
    @JsonProperty("repositories")
    public openapisdk.models.shared.Repository[] repositories;
    public AppsListInstallationReposForAuthenticatedUser200ApplicationJson withRepositories(openapisdk.models.shared.Repository[] repositories) {
        this.repositories = repositories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repository_selection")
    public String repositorySelection;
    public AppsListInstallationReposForAuthenticatedUser200ApplicationJson withRepositorySelection(String repositorySelection) {
        this.repositorySelection = repositorySelection;
        return this;
    }
    @JsonProperty("total_count")
    public Long totalCount;
    public AppsListInstallationReposForAuthenticatedUser200ApplicationJson withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}