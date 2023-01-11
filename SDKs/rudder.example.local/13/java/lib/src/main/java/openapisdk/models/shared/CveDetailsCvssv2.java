package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CveDetailsCvssv2
 * CVSS V2 of the CVE
**/
public class CveDetailsCvssv2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baseScore")
    public Long baseScore;
    public CveDetailsCvssv2 withBaseScore(Long baseScore) {
        this.baseScore = baseScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vector")
    public String vector;
    public CveDetailsCvssv2 withVector(String vector) {
        this.vector = vector;
        return this;
    }
}