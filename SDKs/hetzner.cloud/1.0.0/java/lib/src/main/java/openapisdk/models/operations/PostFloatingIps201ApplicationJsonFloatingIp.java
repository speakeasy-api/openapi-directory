package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostFloatingIps201ApplicationJsonFloatingIp {
    @JsonProperty("blocked")
    public Boolean blocked;
    public PostFloatingIps201ApplicationJsonFloatingIp withBlocked(Boolean blocked) {
        this.blocked = blocked;
        return this;
    }
    @JsonProperty("created")
    public String created;
    public PostFloatingIps201ApplicationJsonFloatingIp withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public PostFloatingIps201ApplicationJsonFloatingIp withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("dns_ptr")
    public PostFloatingIps201ApplicationJsonFloatingIpDnsPtr[] dnsPtr;
    public PostFloatingIps201ApplicationJsonFloatingIp withDnsPtr(PostFloatingIps201ApplicationJsonFloatingIpDnsPtr[] dnsPtr) {
        this.dnsPtr = dnsPtr;
        return this;
    }
    @JsonProperty("home_location")
    public PostFloatingIps201ApplicationJsonFloatingIpHomeLocation homeLocation;
    public PostFloatingIps201ApplicationJsonFloatingIp withHomeLocation(PostFloatingIps201ApplicationJsonFloatingIpHomeLocation homeLocation) {
        this.homeLocation = homeLocation;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostFloatingIps201ApplicationJsonFloatingIp withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("ip")
    public String ip;
    public PostFloatingIps201ApplicationJsonFloatingIp withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public PostFloatingIps201ApplicationJsonFloatingIp withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PostFloatingIps201ApplicationJsonFloatingIp withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("protection")
    public PostFloatingIps201ApplicationJsonFloatingIpProtection protection;
    public PostFloatingIps201ApplicationJsonFloatingIp withProtection(PostFloatingIps201ApplicationJsonFloatingIpProtection protection) {
        this.protection = protection;
        return this;
    }
    @JsonProperty("server")
    public Long server;
    public PostFloatingIps201ApplicationJsonFloatingIp withServer(Long server) {
        this.server = server;
        return this;
    }
    @JsonProperty("type")
    public PostFloatingIps201ApplicationJsonFloatingIpTypeEnum type;
    public PostFloatingIps201ApplicationJsonFloatingIp withType(PostFloatingIps201ApplicationJsonFloatingIpTypeEnum type) {
        this.type = type;
        return this;
    }
}