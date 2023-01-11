package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FindingsMetaVulnRefs {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bid")
    public String[] bid;
    public FindingsMetaVulnRefs withBid(String[] bid) {
        this.bid = bid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpe")
    public String[] cpe;
    public FindingsMetaVulnRefs withCpe(String[] cpe) {
        this.cpe = cpe;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cve")
    public String[] cve;
    public FindingsMetaVulnRefs withCve(String[] cve) {
        this.cve = cve;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cwe")
    public String[] cwe;
    public FindingsMetaVulnRefs withCwe(String[] cwe) {
        this.cwe = cwe;
        return this;
    }
}