package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CveCheck {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cveId")
    public String cveId;
    public CveCheck withCveId(String cveId) {
        this.cveId = cveId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodes")
    public String[] nodes;
    public CveCheck withNodes(String[] nodes) {
        this.nodes = nodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packages")
    public CveCheckPackages[] packages;
    public CveCheck withPackages(CveCheckPackages[] packages) {
        this.packages = packages;
        return this;
    }
}