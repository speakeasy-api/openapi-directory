package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SecretVersion
 * A secret version resource in the Secret Manager API.
**/
public class SecretVersion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public SecretVersion withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destroyTime")
    public String destroyTime;
    public SecretVersion withDestroyTime(String destroyTime) {
        this.destroyTime = destroyTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SecretVersion withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public SecretVersionStateEnum state;
    public SecretVersion withState(SecretVersionStateEnum state) {
        this.state = state;
        return this;
    }
}