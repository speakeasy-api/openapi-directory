package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AuthorizationScopedInstallation {
    @JsonProperty("account")
    public SimpleUser account;
    public AuthorizationScopedInstallation withAccount(SimpleUser account) {
        this.account = account;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_multiple_single_files")
    public Boolean hasMultipleSingleFiles;
    public AuthorizationScopedInstallation withHasMultipleSingleFiles(Boolean hasMultipleSingleFiles) {
        this.hasMultipleSingleFiles = hasMultipleSingleFiles;
        return this;
    }
    @JsonProperty("permissions")
    public AppPermissions permissions;
    public AuthorizationScopedInstallation withPermissions(AppPermissions permissions) {
        this.permissions = permissions;
        return this;
    }
    @JsonProperty("repositories_url")
    public String repositoriesUrl;
    public AuthorizationScopedInstallation withRepositoriesUrl(String repositoriesUrl) {
        this.repositoriesUrl = repositoriesUrl;
        return this;
    }
    @JsonProperty("repository_selection")
    public AuthorizationScopedInstallationRepositorySelectionEnum repositorySelection;
    public AuthorizationScopedInstallation withRepositorySelection(AuthorizationScopedInstallationRepositorySelectionEnum repositorySelection) {
        this.repositorySelection = repositorySelection;
        return this;
    }
    @JsonProperty("single_file_name")
    public String singleFileName;
    public AuthorizationScopedInstallation withSingleFileName(String singleFileName) {
        this.singleFileName = singleFileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("single_file_paths")
    public String[] singleFilePaths;
    public AuthorizationScopedInstallation withSingleFilePaths(String[] singleFilePaths) {
        this.singleFilePaths = singleFilePaths;
        return this;
    }
}