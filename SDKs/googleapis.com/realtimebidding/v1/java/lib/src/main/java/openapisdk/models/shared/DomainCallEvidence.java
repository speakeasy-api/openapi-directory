package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DomainCallEvidence
 * Number of HTTP calls made by a creative, broken down by domain.
**/
public class DomainCallEvidence {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topHttpCallDomains")
    public DomainCalls[] topHttpCallDomains;
    public DomainCallEvidence withTopHttpCallDomains(DomainCalls[] topHttpCallDomains) {
        this.topHttpCallDomains = topHttpCallDomains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalHttpCallCount")
    public Integer totalHttpCallCount;
    public DomainCallEvidence withTotalHttpCallCount(Integer totalHttpCallCount) {
        this.totalHttpCallCount = totalHttpCallCount;
        return this;
    }
}