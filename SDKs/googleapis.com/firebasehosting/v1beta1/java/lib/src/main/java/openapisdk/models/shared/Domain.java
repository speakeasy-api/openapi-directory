package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Domain
 * The intended behavior and status information of a domain.
**/
public class Domain {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainName")
    public String domainName;
    public Domain withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainRedirect")
    public DomainRedirect domainRedirect;
    public Domain withDomainRedirect(DomainRedirect domainRedirect) {
        this.domainRedirect = domainRedirect;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provisioning")
    public DomainProvisioning provisioning;
    public Domain withProvisioning(DomainProvisioning provisioning) {
        this.provisioning = provisioning;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site")
    public String site;
    public Domain withSite(String site) {
        this.site = site;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public DomainStatusEnum status;
    public Domain withStatus(DomainStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Domain withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}