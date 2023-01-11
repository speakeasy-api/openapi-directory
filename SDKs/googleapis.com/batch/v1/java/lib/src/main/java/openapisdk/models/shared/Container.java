package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Container
 * Container runnable.
**/
public class Container {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blockExternalNetwork")
    public Boolean blockExternalNetwork;
    public Container withBlockExternalNetwork(Boolean blockExternalNetwork) {
        this.blockExternalNetwork = blockExternalNetwork;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commands")
    public String[] commands;
    public Container withCommands(String[] commands) {
        this.commands = commands;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entrypoint")
    public String entrypoint;
    public Container withEntrypoint(String entrypoint) {
        this.entrypoint = entrypoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageUri")
    public String imageUri;
    public Container withImageUri(String imageUri) {
        this.imageUri = imageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public String options;
    public Container withOptions(String options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public Container withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public Container withUsername(String username) {
        this.username = username;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumes")
    public String[] volumes;
    public Container withVolumes(String[] volumes) {
        this.volumes = volumes;
        return this;
    }
}