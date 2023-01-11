package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NestedCluster {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public NestedCluster withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public NestedCluster withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public NestedCluster withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualmachine_count")
    public Long virtualmachineCount;
    public NestedCluster withVirtualmachineCount(Long virtualmachineCount) {
        this.virtualmachineCount = virtualmachineCount;
        return this;
    }
}