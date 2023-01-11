package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Check {
    @JsonProperty("msg")
    public String msg;
    public Check withMsg(String msg) {
        this.msg = msg;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Check withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("status")
    public CheckStatusEnum status;
    public Check withStatus(CheckStatusEnum status) {
        this.status = status;
        return this;
    }
}