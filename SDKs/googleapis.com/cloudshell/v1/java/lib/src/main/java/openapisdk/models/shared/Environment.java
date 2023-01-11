package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Environment
 * A Cloud Shell environment, which is defined as the combination of a Docker image specifying what is installed on the environment and a home directory containing the user's data that will remain across sessions. Each user has at least an environment with the ID "default".
**/
public class Environment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dockerImage")
    public String dockerImage;
    public Environment withDockerImage(String dockerImage) {
        this.dockerImage = dockerImage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Environment withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Environment withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicKeys")
    public String[] publicKeys;
    public Environment withPublicKeys(String[] publicKeys) {
        this.publicKeys = publicKeys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sshHost")
    public String sshHost;
    public Environment withSshHost(String sshHost) {
        this.sshHost = sshHost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sshPort")
    public Integer sshPort;
    public Environment withSshPort(Integer sshPort) {
        this.sshPort = sshPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sshUsername")
    public String sshUsername;
    public Environment withSshUsername(String sshUsername) {
        this.sshUsername = sshUsername;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public EnvironmentStateEnum state;
    public Environment withState(EnvironmentStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webHost")
    public String webHost;
    public Environment withWebHost(String webHost) {
        this.webHost = webHost;
        return this;
    }
}