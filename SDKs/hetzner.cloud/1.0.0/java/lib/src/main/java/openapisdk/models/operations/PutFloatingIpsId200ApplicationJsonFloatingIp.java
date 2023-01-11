package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutFloatingIpsId200ApplicationJsonFloatingIp {
    @JsonProperty("blocked")
    public Boolean blocked;
    public PutFloatingIpsId200ApplicationJsonFloatingIp withBlocked(Boolean blocked) {
        this.blocked = blocked;
        return this;
    }
    @JsonProperty("created")
    public String created;
    public PutFloatingIpsId200ApplicationJsonFloatingIp withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public PutFloatingIpsId200ApplicationJsonFloatingIp withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("dns_ptr")
    public PutFloatingIpsId200ApplicationJsonFloatingIpDnsPtr[] dnsPtr;
    public PutFloatingIpsId200ApplicationJsonFloatingIp withDnsPtr(PutFloatingIpsId200ApplicationJsonFloatingIpDnsPtr[] dnsPtr) {
        this.dnsPtr = dnsPtr;
        return this;
    }
    @JsonProperty("home_location")
    public PutFloatingIpsId200ApplicationJsonFloatingIpHomeLocation homeLocation;
    public PutFloatingIpsId200ApplicationJsonFloatingIp withHomeLocation(PutFloatingIpsId200ApplicationJsonFloatingIpHomeLocation homeLocation) {
        this.homeLocation = homeLocation;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PutFloatingIpsId200ApplicationJsonFloatingIp withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("ip")
    public String ip;
    public PutFloatingIpsId200ApplicationJsonFloatingIp withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public PutFloatingIpsId200ApplicationJsonFloatingIp withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PutFloatingIpsId200ApplicationJsonFloatingIp withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("protection")
    public PutFloatingIpsId200ApplicationJsonFloatingIpProtection protection;
    public PutFloatingIpsId200ApplicationJsonFloatingIp withProtection(PutFloatingIpsId200ApplicationJsonFloatingIpProtection protection) {
        this.protection = protection;
        return this;
    }
    @JsonProperty("server")
    public Long server;
    public PutFloatingIpsId200ApplicationJsonFloatingIp withServer(Long server) {
        this.server = server;
        return this;
    }
    @JsonProperty("type")
    public PutFloatingIpsId200ApplicationJsonFloatingIpTypeEnum type;
    public PutFloatingIpsId200ApplicationJsonFloatingIp withType(PutFloatingIpsId200ApplicationJsonFloatingIpTypeEnum type) {
        this.type = type;
        return this;
    }
}