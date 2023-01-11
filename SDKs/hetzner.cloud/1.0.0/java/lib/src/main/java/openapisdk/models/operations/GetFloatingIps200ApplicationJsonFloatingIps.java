package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetFloatingIps200ApplicationJsonFloatingIps {
    @JsonProperty("blocked")
    public Boolean blocked;
    public GetFloatingIps200ApplicationJsonFloatingIps withBlocked(Boolean blocked) {
        this.blocked = blocked;
        return this;
    }
    @JsonProperty("created")
    public String created;
    public GetFloatingIps200ApplicationJsonFloatingIps withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public GetFloatingIps200ApplicationJsonFloatingIps withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("dns_ptr")
    public GetFloatingIps200ApplicationJsonFloatingIpsDnsPtr[] dnsPtr;
    public GetFloatingIps200ApplicationJsonFloatingIps withDnsPtr(GetFloatingIps200ApplicationJsonFloatingIpsDnsPtr[] dnsPtr) {
        this.dnsPtr = dnsPtr;
        return this;
    }
    @JsonProperty("home_location")
    public GetFloatingIps200ApplicationJsonFloatingIpsHomeLocation homeLocation;
    public GetFloatingIps200ApplicationJsonFloatingIps withHomeLocation(GetFloatingIps200ApplicationJsonFloatingIpsHomeLocation homeLocation) {
        this.homeLocation = homeLocation;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetFloatingIps200ApplicationJsonFloatingIps withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("ip")
    public String ip;
    public GetFloatingIps200ApplicationJsonFloatingIps withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public GetFloatingIps200ApplicationJsonFloatingIps withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetFloatingIps200ApplicationJsonFloatingIps withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("protection")
    public GetFloatingIps200ApplicationJsonFloatingIpsProtection protection;
    public GetFloatingIps200ApplicationJsonFloatingIps withProtection(GetFloatingIps200ApplicationJsonFloatingIpsProtection protection) {
        this.protection = protection;
        return this;
    }
    @JsonProperty("server")
    public Long server;
    public GetFloatingIps200ApplicationJsonFloatingIps withServer(Long server) {
        this.server = server;
        return this;
    }
    @JsonProperty("type")
    public GetFloatingIps200ApplicationJsonFloatingIpsTypeEnum type;
    public GetFloatingIps200ApplicationJsonFloatingIps withType(GetFloatingIps200ApplicationJsonFloatingIpsTypeEnum type) {
        this.type = type;
        return this;
    }
}