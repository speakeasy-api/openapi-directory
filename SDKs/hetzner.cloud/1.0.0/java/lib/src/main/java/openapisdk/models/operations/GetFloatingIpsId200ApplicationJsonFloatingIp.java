package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetFloatingIpsId200ApplicationJsonFloatingIp {
    @JsonProperty("blocked")
    public Boolean blocked;
    public GetFloatingIpsId200ApplicationJsonFloatingIp withBlocked(Boolean blocked) {
        this.blocked = blocked;
        return this;
    }
    @JsonProperty("created")
    public String created;
    public GetFloatingIpsId200ApplicationJsonFloatingIp withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public GetFloatingIpsId200ApplicationJsonFloatingIp withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("dns_ptr")
    public GetFloatingIpsId200ApplicationJsonFloatingIpDnsPtr[] dnsPtr;
    public GetFloatingIpsId200ApplicationJsonFloatingIp withDnsPtr(GetFloatingIpsId200ApplicationJsonFloatingIpDnsPtr[] dnsPtr) {
        this.dnsPtr = dnsPtr;
        return this;
    }
    @JsonProperty("home_location")
    public GetFloatingIpsId200ApplicationJsonFloatingIpHomeLocation homeLocation;
    public GetFloatingIpsId200ApplicationJsonFloatingIp withHomeLocation(GetFloatingIpsId200ApplicationJsonFloatingIpHomeLocation homeLocation) {
        this.homeLocation = homeLocation;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetFloatingIpsId200ApplicationJsonFloatingIp withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("ip")
    public String ip;
    public GetFloatingIpsId200ApplicationJsonFloatingIp withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public GetFloatingIpsId200ApplicationJsonFloatingIp withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetFloatingIpsId200ApplicationJsonFloatingIp withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("protection")
    public GetFloatingIpsId200ApplicationJsonFloatingIpProtection protection;
    public GetFloatingIpsId200ApplicationJsonFloatingIp withProtection(GetFloatingIpsId200ApplicationJsonFloatingIpProtection protection) {
        this.protection = protection;
        return this;
    }
    @JsonProperty("server")
    public Long server;
    public GetFloatingIpsId200ApplicationJsonFloatingIp withServer(Long server) {
        this.server = server;
        return this;
    }
    @JsonProperty("type")
    public GetFloatingIpsId200ApplicationJsonFloatingIpTypeEnum type;
    public GetFloatingIpsId200ApplicationJsonFloatingIp withType(GetFloatingIpsId200ApplicationJsonFloatingIpTypeEnum type) {
        this.type = type;
        return this;
    }
}