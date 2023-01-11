package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchNameMatchCandidatesOut {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namesAndMatchCandidates")
    public NameMatchCandidatesOut[] namesAndMatchCandidates;
    public BatchNameMatchCandidatesOut withNamesAndMatchCandidates(NameMatchCandidatesOut[] namesAndMatchCandidates) {
        this.namesAndMatchCandidates = namesAndMatchCandidates;
        return this;
    }
}