package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DestinationNotWorkingEvidence
 * Evidence of the creative's destination URL not functioning properly or having been incorrectly set up.
**/
public class DestinationNotWorkingEvidence {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dnsError")
    public DestinationNotWorkingEvidenceDnsErrorEnum dnsError;
    public DestinationNotWorkingEvidence withDnsError(DestinationNotWorkingEvidenceDnsErrorEnum dnsError) {
        this.dnsError = dnsError;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expandedUrl")
    public String expandedUrl;
    public DestinationNotWorkingEvidence withExpandedUrl(String expandedUrl) {
        this.expandedUrl = expandedUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpError")
    public Integer httpError;
    public DestinationNotWorkingEvidence withHttpError(Integer httpError) {
        this.httpError = httpError;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invalidPage")
    public DestinationNotWorkingEvidenceInvalidPageEnum invalidPage;
    public DestinationNotWorkingEvidence withInvalidPage(DestinationNotWorkingEvidenceInvalidPageEnum invalidPage) {
        this.invalidPage = invalidPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastCheckTime")
    public String lastCheckTime;
    public DestinationNotWorkingEvidence withLastCheckTime(String lastCheckTime) {
        this.lastCheckTime = lastCheckTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platform")
    public DestinationNotWorkingEvidencePlatformEnum platform;
    public DestinationNotWorkingEvidence withPlatform(DestinationNotWorkingEvidencePlatformEnum platform) {
        this.platform = platform;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("redirectionError")
    public DestinationNotWorkingEvidenceRedirectionErrorEnum redirectionError;
    public DestinationNotWorkingEvidence withRedirectionError(DestinationNotWorkingEvidenceRedirectionErrorEnum redirectionError) {
        this.redirectionError = redirectionError;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urlRejected")
    public DestinationNotWorkingEvidenceUrlRejectedEnum urlRejected;
    public DestinationNotWorkingEvidence withUrlRejected(DestinationNotWorkingEvidenceUrlRejectedEnum urlRejected) {
        this.urlRejected = urlRejected;
        return this;
    }
}