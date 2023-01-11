package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AnnotationRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evidenceCodes")
    public String[] evidenceCodes;
    public AnnotationRequest withEvidenceCodes(String[] evidenceCodes) {
        this.evidenceCodes = evidenceCodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ids")
    public String[] ids;
    public AnnotationRequest withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("speciesTypeKeys")
    public Integer[] speciesTypeKeys;
    public AnnotationRequest withSpeciesTypeKeys(Integer[] speciesTypeKeys) {
        this.speciesTypeKeys = speciesTypeKeys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("termAcc")
    public String termAcc;
    public AnnotationRequest withTermAcc(String termAcc) {
        this.termAcc = termAcc;
        return this;
    }
}