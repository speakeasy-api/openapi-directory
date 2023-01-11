package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HostReputationResponse {
    @JsonProperty("host")
    public String host;
    public HostReputationResponse withHost(String host) {
        this.host = host;
        return this;
    }
    @JsonProperty("isListed")
    public Boolean isListed;
    public HostReputationResponse withIsListed(Boolean isListed) {
        this.isListed = isListed;
        return this;
    }
    @JsonProperty("listCount")
    public Integer listCount;
    public HostReputationResponse withListCount(Integer listCount) {
        this.listCount = listCount;
        return this;
    }
    @JsonProperty("lists")
    public Blacklist[] lists;
    public HostReputationResponse withLists(Blacklist[] lists) {
        this.lists = lists;
        return this;
    }
}