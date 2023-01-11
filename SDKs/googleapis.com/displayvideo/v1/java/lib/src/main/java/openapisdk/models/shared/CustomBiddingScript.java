package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomBiddingScript
 * A single custom bidding script.
**/
public class CustomBiddingScript {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public CustomBiddingScript withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public CustomBiddingScript withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customBiddingAlgorithmId")
    public String customBiddingAlgorithmId;
    public CustomBiddingScript withCustomBiddingAlgorithmId(String customBiddingAlgorithmId) {
        this.customBiddingAlgorithmId = customBiddingAlgorithmId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customBiddingScriptId")
    public String customBiddingScriptId;
    public CustomBiddingScript withCustomBiddingScriptId(String customBiddingScriptId) {
        this.customBiddingScriptId = customBiddingScriptId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public ScriptError[] errors;
    public CustomBiddingScript withErrors(ScriptError[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CustomBiddingScript withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("script")
    public CustomBiddingScriptRef script;
    public CustomBiddingScript withScript(CustomBiddingScriptRef script) {
        this.script = script;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public CustomBiddingScriptStateEnum state;
    public CustomBiddingScript withState(CustomBiddingScriptStateEnum state) {
        this.state = state;
        return this;
    }
}