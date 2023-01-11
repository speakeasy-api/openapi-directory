package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServiceResolver
 * A ServiceResolver represents an EKM replica that can be reached within an EkmConnection.
**/
public class ServiceResolver {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpointFilter")
    public String endpointFilter;
    public ServiceResolver withEndpointFilter(String endpointFilter) {
        this.endpointFilter = endpointFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hostname")
    public String hostname;
    public ServiceResolver withHostname(String hostname) {
        this.hostname = hostname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverCertificates")
    public Certificate[] serverCertificates;
    public ServiceResolver withServerCertificates(Certificate[] serverCertificates) {
        this.serverCertificates = serverCertificates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceDirectoryService")
    public String serviceDirectoryService;
    public ServiceResolver withServiceDirectoryService(String serviceDirectoryService) {
        this.serviceDirectoryService = serviceDirectoryService;
        return this;
    }
}