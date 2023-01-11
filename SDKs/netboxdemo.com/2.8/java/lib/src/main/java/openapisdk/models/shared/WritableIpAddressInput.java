package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WritableIpAddressInput {
    @JsonProperty("address")
    public String address;
    public WritableIpAddressInput withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_fields")
    public java.util.Map<String, Object> customFields;
    public WritableIpAddressInput withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public WritableIpAddressInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dns_name")
    public String dnsName;
    public WritableIpAddressInput withDnsName(String dnsName) {
        this.dnsName = dnsName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interface")
    public Long interface_;
    public WritableIpAddressInput withInterface(Long interface_) {
        this.interface_ = interface_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nat_inside")
    public Long natInside;
    public WritableIpAddressInput withNatInside(Long natInside) {
        this.natInside = natInside;
        return this;
    }
    @JsonProperty("nat_outside")
    public Long natOutside;
    public WritableIpAddressInput withNatOutside(Long natOutside) {
        this.natOutside = natOutside;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public WritableIpAddressRoleEnum role;
    public WritableIpAddressInput withRole(WritableIpAddressRoleEnum role) {
        this.role = role;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public WritableIpAddressStatusEnum status;
    public WritableIpAddressInput withStatus(WritableIpAddressStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public WritableIpAddressInput withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tenant")
    public Long tenant;
    public WritableIpAddressInput withTenant(Long tenant) {
        this.tenant = tenant;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vrf")
    public Long vrf;
    public WritableIpAddressInput withVrf(Long vrf) {
        this.vrf = vrf;
        return this;
    }
}