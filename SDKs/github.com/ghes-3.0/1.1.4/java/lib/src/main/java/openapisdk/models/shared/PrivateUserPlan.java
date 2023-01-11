package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PrivateUserPlan {
    @JsonProperty("collaborators")
    public Long collaborators;
    public PrivateUserPlan withCollaborators(Long collaborators) {
        this.collaborators = collaborators;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PrivateUserPlan withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("private_repos")
    public Long privateRepos;
    public PrivateUserPlan withPrivateRepos(Long privateRepos) {
        this.privateRepos = privateRepos;
        return this;
    }
    @JsonProperty("space")
    public Long space;
    public PrivateUserPlan withSpace(Long space) {
        this.space = space;
        return this;
    }
}