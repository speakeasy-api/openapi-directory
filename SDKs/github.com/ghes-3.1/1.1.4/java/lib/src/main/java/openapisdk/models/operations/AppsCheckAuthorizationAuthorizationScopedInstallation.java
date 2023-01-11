package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AppsCheckAuthorizationAuthorizationScopedInstallation {
    @JsonProperty("account")
    public openapisdk.models.shared.SimpleUser account;
    public AppsCheckAuthorizationAuthorizationScopedInstallation withAccount(openapisdk.models.shared.SimpleUser account) {
        this.account = account;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_multiple_single_files")
    public Boolean hasMultipleSingleFiles;
    public AppsCheckAuthorizationAuthorizationScopedInstallation withHasMultipleSingleFiles(Boolean hasMultipleSingleFiles) {
        this.hasMultipleSingleFiles = hasMultipleSingleFiles;
        return this;
    }
    @JsonProperty("permissions")
    public openapisdk.models.shared.AppPermissions permissions;
    public AppsCheckAuthorizationAuthorizationScopedInstallation withPermissions(openapisdk.models.shared.AppPermissions permissions) {
        this.permissions = permissions;
        return this;
    }
    @JsonProperty("repositories_url")
    public String repositoriesUrl;
    public AppsCheckAuthorizationAuthorizationScopedInstallation withRepositoriesUrl(String repositoriesUrl) {
        this.repositoriesUrl = repositoriesUrl;
        return this;
    }
    @JsonProperty("repository_selection")
    public AppsCheckAuthorizationAuthorizationScopedInstallationRepositorySelectionEnum repositorySelection;
    public AppsCheckAuthorizationAuthorizationScopedInstallation withRepositorySelection(AppsCheckAuthorizationAuthorizationScopedInstallationRepositorySelectionEnum repositorySelection) {
        this.repositorySelection = repositorySelection;
        return this;
    }
    @JsonProperty("single_file_name")
    public String singleFileName;
    public AppsCheckAuthorizationAuthorizationScopedInstallation withSingleFileName(String singleFileName) {
        this.singleFileName = singleFileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("single_file_paths")
    public String[] singleFilePaths;
    public AppsCheckAuthorizationAuthorizationScopedInstallation withSingleFilePaths(String[] singleFilePaths) {
        this.singleFilePaths = singleFilePaths;
        return this;
    }
}