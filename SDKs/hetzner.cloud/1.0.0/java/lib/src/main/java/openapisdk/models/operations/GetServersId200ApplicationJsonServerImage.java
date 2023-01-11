package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetServersId200ApplicationJsonServerImage {
    @JsonProperty("bound_to")
    public Long boundTo;
    public GetServersId200ApplicationJsonServerImage withBoundTo(Long boundTo) {
        this.boundTo = boundTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("build_id")
    public String buildId;
    public GetServersId200ApplicationJsonServerImage withBuildId(String buildId) {
        this.buildId = buildId;
        return this;
    }
    @JsonProperty("created")
    public String created;
    public GetServersId200ApplicationJsonServerImage withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonProperty("created_from")
    public GetServersId200ApplicationJsonServerImageCreatedFrom createdFrom;
    public GetServersId200ApplicationJsonServerImage withCreatedFrom(GetServersId200ApplicationJsonServerImageCreatedFrom createdFrom) {
        this.createdFrom = createdFrom;
        return this;
    }
    @JsonProperty("deleted")
    public String deleted;
    public GetServersId200ApplicationJsonServerImage withDeleted(String deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonProperty("deprecated")
    public String deprecated;
    public GetServersId200ApplicationJsonServerImage withDeprecated(String deprecated) {
        this.deprecated = deprecated;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public GetServersId200ApplicationJsonServerImage withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("disk_size")
    public Double diskSize;
    public GetServersId200ApplicationJsonServerImage withDiskSize(Double diskSize) {
        this.diskSize = diskSize;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetServersId200ApplicationJsonServerImage withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("image_size")
    public Double imageSize;
    public GetServersId200ApplicationJsonServerImage withImageSize(Double imageSize) {
        this.imageSize = imageSize;
        return this;
    }
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public GetServersId200ApplicationJsonServerImage withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetServersId200ApplicationJsonServerImage withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("os_flavor")
    public GetServersId200ApplicationJsonServerImageOsFlavorEnum osFlavor;
    public GetServersId200ApplicationJsonServerImage withOsFlavor(GetServersId200ApplicationJsonServerImageOsFlavorEnum osFlavor) {
        this.osFlavor = osFlavor;
        return this;
    }
    @JsonProperty("os_version")
    public String osVersion;
    public GetServersId200ApplicationJsonServerImage withOsVersion(String osVersion) {
        this.osVersion = osVersion;
        return this;
    }
    @JsonProperty("protection")
    public GetServersId200ApplicationJsonServerImageProtection protection;
    public GetServersId200ApplicationJsonServerImage withProtection(GetServersId200ApplicationJsonServerImageProtection protection) {
        this.protection = protection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rapid_deploy")
    public Boolean rapidDeploy;
    public GetServersId200ApplicationJsonServerImage withRapidDeploy(Boolean rapidDeploy) {
        this.rapidDeploy = rapidDeploy;
        return this;
    }
    @JsonProperty("status")
    public GetServersId200ApplicationJsonServerImageStatusEnum status;
    public GetServersId200ApplicationJsonServerImage withStatus(GetServersId200ApplicationJsonServerImageStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("type")
    public GetServersId200ApplicationJsonServerImageTypeEnum type;
    public GetServersId200ApplicationJsonServerImage withType(GetServersId200ApplicationJsonServerImageTypeEnum type) {
        this.type = type;
        return this;
    }
}