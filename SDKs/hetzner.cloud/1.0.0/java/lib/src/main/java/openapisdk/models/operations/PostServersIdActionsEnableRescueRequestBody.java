package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostServersIdActionsEnableRescueRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssh_keys")
    public Long[] sshKeys;
    public PostServersIdActionsEnableRescueRequestBody withSshKeys(Long[] sshKeys) {
        this.sshKeys = sshKeys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public PostServersIdActionsEnableRescueRequestBodyTypeEnum type;
    public PostServersIdActionsEnableRescueRequestBody withType(PostServersIdActionsEnableRescueRequestBodyTypeEnum type) {
        this.type = type;
        return this;
    }
}