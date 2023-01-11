package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CveDetailsCvssv3
 * CVSS V3 of the CVE
**/
public class CveDetailsCvssv3 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baseScore")
    public Double baseScore;
    public CveDetailsCvssv3 withBaseScore(Double baseScore) {
        this.baseScore = baseScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baseSeverity")
    public CveDetailsCvssv3BaseSeverityEnum baseSeverity;
    public CveDetailsCvssv3 withBaseSeverity(CveDetailsCvssv3BaseSeverityEnum baseSeverity) {
        this.baseSeverity = baseSeverity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vector")
    public String vector;
    public CveDetailsCvssv3 withVector(String vector) {
        this.vector = vector;
        return this;
    }
}