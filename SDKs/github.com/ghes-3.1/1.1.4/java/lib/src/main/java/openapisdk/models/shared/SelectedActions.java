package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SelectedActions {
    @JsonProperty("github_owned_allowed")
    public Boolean githubOwnedAllowed;
    public SelectedActions withGithubOwnedAllowed(Boolean githubOwnedAllowed) {
        this.githubOwnedAllowed = githubOwnedAllowed;
        return this;
    }
    @JsonProperty("patterns_allowed")
    public String[] patternsAllowed;
    public SelectedActions withPatternsAllowed(String[] patternsAllowed) {
        this.patternsAllowed = patternsAllowed;
        return this;
    }
}