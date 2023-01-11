package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BuildOccurrence
 * Details of a build occurrence.
**/
public class BuildOccurrence {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intotoProvenance")
    public InTotoProvenance intotoProvenance;
    public BuildOccurrence withIntotoProvenance(InTotoProvenance intotoProvenance) {
        this.intotoProvenance = intotoProvenance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intotoStatement")
    public InTotoStatement intotoStatement;
    public BuildOccurrence withIntotoStatement(InTotoStatement intotoStatement) {
        this.intotoStatement = intotoStatement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provenance")
    public BuildProvenance provenance;
    public BuildOccurrence withProvenance(BuildProvenance provenance) {
        this.provenance = provenance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provenanceBytes")
    public String provenanceBytes;
    public BuildOccurrence withProvenanceBytes(String provenanceBytes) {
        this.provenanceBytes = provenanceBytes;
        return this;
    }
}