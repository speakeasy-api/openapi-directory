package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AnnotatedGeneRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accId")
    public String accId;
    public AnnotatedGeneRequest withAccId(String accId) {
        this.accId = accId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evidenceCodes")
    public String[] evidenceCodes;
    public AnnotatedGeneRequest withEvidenceCodes(String[] evidenceCodes) {
        this.evidenceCodes = evidenceCodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("speciesTypeKeys")
    public Integer[] speciesTypeKeys;
    public AnnotatedGeneRequest withSpeciesTypeKeys(Integer[] speciesTypeKeys) {
        this.speciesTypeKeys = speciesTypeKeys;
        return this;
    }
}