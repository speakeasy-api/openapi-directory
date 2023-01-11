package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InterfaceNestedCircuit {
    @JsonProperty("cid")
    public String cid;
    public InterfaceNestedCircuit withCid(String cid) {
        this.cid = cid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public InterfaceNestedCircuit withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public InterfaceNestedCircuit withUrl(String url) {
        this.url = url;
        return this;
    }
}