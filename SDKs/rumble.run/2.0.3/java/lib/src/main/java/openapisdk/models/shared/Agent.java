package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Agent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arch")
    public String arch;
    public Agent withArch(String arch) {
        this.arch = arch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public Agent withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connected")
    public Boolean connected;
    public Agent withConnected(Boolean connected) {
        this.connected = connected;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public Long createdAt;
    public Agent withCreatedAt(Long createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deactivated_at")
    public Long deactivatedAt;
    public Agent withDeactivatedAt(Long deactivatedAt) {
        this.deactivatedAt = deactivatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("external_ip")
    public String externalIp;
    public Agent withExternalIp(String externalIp) {
        this.externalIp = externalIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host_id")
    public String hostId;
    public Agent withHostId(String hostId) {
        this.hostId = hostId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hub_id")
    public String hubId;
    public Agent withHubId(String hubId) {
        this.hubId = hubId;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public Agent withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inactive")
    public Boolean inactive;
    public Agent withInactive(Boolean inactive) {
        this.inactive = inactive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("internal_ip")
    public String internalIp;
    public Agent withInternalIp(String internalIp) {
        this.internalIp = internalIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_checkin")
    public Long lastCheckin;
    public Agent withLastCheckin(Long lastCheckin) {
        this.lastCheckin = lastCheckin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Agent withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization_id")
    public String organizationId;
    public Agent withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("os")
    public String os;
    public Agent withOs(String os) {
        this.os = os;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site_id")
    public String siteId;
    public Agent withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("system_info")
    public java.util.Map<String, Object> systemInfo;
    public Agent withSystemInfo(java.util.Map<String, Object> systemInfo) {
        this.systemInfo = systemInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_at")
    public Long updatedAt;
    public Agent withUpdatedAt(Long updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public Agent withVersion(String version) {
        this.version = version;
        return this;
    }
}