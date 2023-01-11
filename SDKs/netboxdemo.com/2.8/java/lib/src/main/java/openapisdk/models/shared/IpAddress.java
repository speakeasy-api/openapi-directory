package openapisdk.models.shared;

import java.time.OffsetDateTime;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class IpAddress {
    @JsonProperty("address")
    public String address;
    public IpAddress withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created")
    public LocalDate created;
    public IpAddress withCreated(LocalDate created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_fields")
    public java.util.Map<String, Object> customFields;
    public IpAddress withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public IpAddress withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dns_name")
    public String dnsName;
    public IpAddress withDnsName(String dnsName) {
        this.dnsName = dnsName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("family")
    public IpAddressFamily family;
    public IpAddress withFamily(IpAddressFamily family) {
        this.family = family;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public IpAddress withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interface")
    public IpAddressInterface interface_;
    public IpAddress withInterface(IpAddressInterface interface_) {
        this.interface_ = interface_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("last_updated")
    public OffsetDateTime lastUpdated;
    public IpAddress withLastUpdated(OffsetDateTime lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nat_inside")
    public NestedIpAddress natInside;
    public IpAddress withNatInside(NestedIpAddress natInside) {
        this.natInside = natInside;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nat_outside")
    public NestedIpAddress natOutside;
    public IpAddress withNatOutside(NestedIpAddress natOutside) {
        this.natOutside = natOutside;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public IpAddressRole role;
    public IpAddress withRole(IpAddressRole role) {
        this.role = role;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public IpAddressStatus status;
    public IpAddress withStatus(IpAddressStatus status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public IpAddress withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tenant")
    public NestedTenant tenant;
    public IpAddress withTenant(NestedTenant tenant) {
        this.tenant = tenant;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vrf")
    public NestedVrf vrf;
    public IpAddress withVrf(NestedVrf vrf) {
        this.vrf = vrf;
        return this;
    }
}