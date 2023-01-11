package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServiceResolverInput
 * A ServiceResolver represents an EKM replica that can be reached within an EkmConnection.
**/
public class ServiceResolverInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpointFilter")
    public String endpointFilter;
    public ServiceResolverInput withEndpointFilter(String endpointFilter) {
        this.endpointFilter = endpointFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hostname")
    public String hostname;
    public ServiceResolverInput withHostname(String hostname) {
        this.hostname = hostname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverCertificates")
    public CertificateInput[] serverCertificates;
    public ServiceResolverInput withServerCertificates(CertificateInput[] serverCertificates) {
        this.serverCertificates = serverCertificates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceDirectoryService")
    public String serviceDirectoryService;
    public ServiceResolverInput withServiceDirectoryService(String serviceDirectoryService) {
        this.serviceDirectoryService = serviceDirectoryService;
        return this;
    }
}