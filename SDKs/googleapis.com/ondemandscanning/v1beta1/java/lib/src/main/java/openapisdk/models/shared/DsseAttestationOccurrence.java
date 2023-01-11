package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DsseAttestationOccurrence
 * Deprecated. Prefer to use a regular Occurrence, and populate the Envelope at the top level of the Occurrence.
**/
public class DsseAttestationOccurrence {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("envelope")
    public Envelope envelope;
    public DsseAttestationOccurrence withEnvelope(Envelope envelope) {
        this.envelope = envelope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statement")
    public InTotoStatement statement;
    public DsseAttestationOccurrence withStatement(InTotoStatement statement) {
        this.statement = statement;
        return this;
    }
}