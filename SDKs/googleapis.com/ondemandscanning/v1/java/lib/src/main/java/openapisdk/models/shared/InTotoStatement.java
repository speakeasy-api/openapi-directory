package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InTotoStatement
 * Spec defined at https://github.com/in-toto/attestation/tree/main/spec#statement The serialized InTotoStatement will be stored as Envelope.payload. Envelope.payloadType is always "application/vnd.in-toto+json".
**/
public class InTotoStatement {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_type")
    public String type;
    public InTotoStatement withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("predicateType")
    public String predicateType;
    public InTotoStatement withPredicateType(String predicateType) {
        this.predicateType = predicateType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provenance")
    public InTotoProvenance provenance;
    public InTotoStatement withProvenance(InTotoProvenance provenance) {
        this.provenance = provenance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slsaProvenance")
    public SlsaProvenance slsaProvenance;
    public InTotoStatement withSlsaProvenance(SlsaProvenance slsaProvenance) {
        this.slsaProvenance = slsaProvenance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slsaProvenanceZeroTwo")
    public SlsaProvenanceZeroTwo slsaProvenanceZeroTwo;
    public InTotoStatement withSlsaProvenanceZeroTwo(SlsaProvenanceZeroTwo slsaProvenanceZeroTwo) {
        this.slsaProvenanceZeroTwo = slsaProvenanceZeroTwo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subject")
    public Subject[] subject;
    public InTotoStatement withSubject(Subject[] subject) {
        this.subject = subject;
        return this;
    }
}