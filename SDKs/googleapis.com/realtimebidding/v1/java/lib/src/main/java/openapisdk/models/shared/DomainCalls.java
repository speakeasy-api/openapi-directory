package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DomainCalls
 * The number of HTTP calls made to the given domain.
**/
public class DomainCalls {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain")
    public String domain;
    public DomainCalls withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpCallCount")
    public Integer httpCallCount;
    public DomainCalls withHttpCallCount(Integer httpCallCount) {
        this.httpCallCount = httpCallCount;
        return this;
    }
}