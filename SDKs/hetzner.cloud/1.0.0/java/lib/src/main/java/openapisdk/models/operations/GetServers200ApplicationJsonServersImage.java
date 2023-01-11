package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetServers200ApplicationJsonServersImage {
    @JsonProperty("bound_to")
    public Long boundTo;
    public GetServers200ApplicationJsonServersImage withBoundTo(Long boundTo) {
        this.boundTo = boundTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("build_id")
    public String buildId;
    public GetServers200ApplicationJsonServersImage withBuildId(String buildId) {
        this.buildId = buildId;
        return this;
    }
    @JsonProperty("created")
    public String created;
    public GetServers200ApplicationJsonServersImage withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonProperty("created_from")
    public GetServers200ApplicationJsonServersImageCreatedFrom createdFrom;
    public GetServers200ApplicationJsonServersImage withCreatedFrom(GetServers200ApplicationJsonServersImageCreatedFrom createdFrom) {
        this.createdFrom = createdFrom;
        return this;
    }
    @JsonProperty("deleted")
    public String deleted;
    public GetServers200ApplicationJsonServersImage withDeleted(String deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonProperty("deprecated")
    public String deprecated;
    public GetServers200ApplicationJsonServersImage withDeprecated(String deprecated) {
        this.deprecated = deprecated;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public GetServers200ApplicationJsonServersImage withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("disk_size")
    public Double diskSize;
    public GetServers200ApplicationJsonServersImage withDiskSize(Double diskSize) {
        this.diskSize = diskSize;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetServers200ApplicationJsonServersImage withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("image_size")
    public Double imageSize;
    public GetServers200ApplicationJsonServersImage withImageSize(Double imageSize) {
        this.imageSize = imageSize;
        return this;
    }
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public GetServers200ApplicationJsonServersImage withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetServers200ApplicationJsonServersImage withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("os_flavor")
    public GetServers200ApplicationJsonServersImageOsFlavorEnum osFlavor;
    public GetServers200ApplicationJsonServersImage withOsFlavor(GetServers200ApplicationJsonServersImageOsFlavorEnum osFlavor) {
        this.osFlavor = osFlavor;
        return this;
    }
    @JsonProperty("os_version")
    public String osVersion;
    public GetServers200ApplicationJsonServersImage withOsVersion(String osVersion) {
        this.osVersion = osVersion;
        return this;
    }
    @JsonProperty("protection")
    public GetServers200ApplicationJsonServersImageProtection protection;
    public GetServers200ApplicationJsonServersImage withProtection(GetServers200ApplicationJsonServersImageProtection protection) {
        this.protection = protection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rapid_deploy")
    public Boolean rapidDeploy;
    public GetServers200ApplicationJsonServersImage withRapidDeploy(Boolean rapidDeploy) {
        this.rapidDeploy = rapidDeploy;
        return this;
    }
    @JsonProperty("status")
    public GetServers200ApplicationJsonServersImageStatusEnum status;
    public GetServers200ApplicationJsonServersImage withStatus(GetServers200ApplicationJsonServersImageStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("type")
    public GetServers200ApplicationJsonServersImageTypeEnum type;
    public GetServers200ApplicationJsonServersImage withType(GetServers200ApplicationJsonServersImageTypeEnum type) {
        this.type = type;
        return this;
    }
}