package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssetServiceNow {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addresses_extra")
    public String addressesExtra;
    public AssetServiceNow withAddressesExtra(String addressesExtra) {
        this.addressesExtra = addressesExtra;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addresses_scope")
    public String addressesScope;
    public AssetServiceNow withAddressesScope(String addressesScope) {
        this.addressesScope = addressesScope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alive")
    public Boolean alive;
    public AssetServiceNow withAlive(Boolean alive) {
        this.alive = alive;
        return this;
    }
    @JsonProperty("asset_id")
    public String assetId;
    public AssetServiceNow withAssetId(String assetId) {
        this.assetId = assetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public String comments;
    public AssetServiceNow withComments(String comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detected_by")
    public String detectedBy;
    public AssetServiceNow withDetectedBy(String detectedBy) {
        this.detectedBy = detectedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domains")
    public String domains;
    public AssetServiceNow withDomains(String domains) {
        this.domains = domains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_discovered")
    public String firstDiscovered;
    public AssetServiceNow withFirstDiscovered(String firstDiscovered) {
        this.firstDiscovered = firstDiscovered;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hw_product")
    public String hwProduct;
    public AssetServiceNow withHwProduct(String hwProduct) {
        this.hwProduct = hwProduct;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hw_vendor")
    public String hwVendor;
    public AssetServiceNow withHwVendor(String hwVendor) {
        this.hwVendor = hwVendor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hw_version")
    public String hwVersion;
    public AssetServiceNow withHwVersion(String hwVersion) {
        this.hwVersion = hwVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip_address")
    public String ipAddress;
    public AssetServiceNow withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_discovered")
    public String lastDiscovered;
    public AssetServiceNow withLastDiscovered(String lastDiscovered) {
        this.lastDiscovered = lastDiscovered;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_updated")
    public String lastUpdated;
    public AssetServiceNow withLastUpdated(String lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lowest_rtt")
    public Long lowestRtt;
    public AssetServiceNow withLowestRtt(Long lowestRtt) {
        this.lowestRtt = lowestRtt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lowest_ttl")
    public Long lowestTtl;
    public AssetServiceNow withLowestTtl(Long lowestTtl) {
        this.lowestTtl = lowestTtl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mac_address")
    public String macAddress;
    public AssetServiceNow withMacAddress(String macAddress) {
        this.macAddress = macAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mac_manufacturer")
    public String macManufacturer;
    public AssetServiceNow withMacManufacturer(String macManufacturer) {
        this.macManufacturer = macManufacturer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mac_vendors")
    public String macVendors;
    public AssetServiceNow withMacVendors(String macVendors) {
        this.macVendors = macVendors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("macs")
    public String macs;
    public AssetServiceNow withMacs(String macs) {
        this.macs = macs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AssetServiceNow withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newest_mac_age")
    public String newestMacAge;
    public AssetServiceNow withNewestMacAge(String newestMacAge) {
        this.newestMacAge = newestMacAge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization")
    public String organization;
    public AssetServiceNow withOrganization(String organization) {
        this.organization = organization;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("os_product")
    public String osProduct;
    public AssetServiceNow withOsProduct(String osProduct) {
        this.osProduct = osProduct;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("os_vendor")
    public String osVendor;
    public AssetServiceNow withOsVendor(String osVendor) {
        this.osVendor = osVendor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("os_version")
    public String osVersion;
    public AssetServiceNow withOsVersion(String osVersion) {
        this.osVersion = osVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_count")
    public Long serviceCount;
    public AssetServiceNow withServiceCount(Long serviceCount) {
        this.serviceCount = serviceCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_count_arp")
    public Long serviceCountArp;
    public AssetServiceNow withServiceCountArp(Long serviceCountArp) {
        this.serviceCountArp = serviceCountArp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_count_icmp")
    public Long serviceCountIcmp;
    public AssetServiceNow withServiceCountIcmp(Long serviceCountIcmp) {
        this.serviceCountIcmp = serviceCountIcmp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_count_tcp")
    public Long serviceCountTcp;
    public AssetServiceNow withServiceCountTcp(Long serviceCountTcp) {
        this.serviceCountTcp = serviceCountTcp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_count_udp")
    public Long serviceCountUdp;
    public AssetServiceNow withServiceCountUdp(Long serviceCountUdp) {
        this.serviceCountUdp = serviceCountUdp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site")
    public String site;
    public AssetServiceNow withSite(String site) {
        this.site = site;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sys_class_name")
    public String sysClassName;
    public AssetServiceNow withSysClassName(String sysClassName) {
        this.sysClassName = sysClassName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String tags;
    public AssetServiceNow withTags(String tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public AssetServiceNow withType(String type) {
        this.type = type;
        return this;
    }
}