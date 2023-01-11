package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutServersId200ApplicationJsonServerImage {
    @JsonProperty("bound_to")
    public Long boundTo;
    public PutServersId200ApplicationJsonServerImage withBoundTo(Long boundTo) {
        this.boundTo = boundTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("build_id")
    public String buildId;
    public PutServersId200ApplicationJsonServerImage withBuildId(String buildId) {
        this.buildId = buildId;
        return this;
    }
    @JsonProperty("created")
    public String created;
    public PutServersId200ApplicationJsonServerImage withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonProperty("created_from")
    public PutServersId200ApplicationJsonServerImageCreatedFrom createdFrom;
    public PutServersId200ApplicationJsonServerImage withCreatedFrom(PutServersId200ApplicationJsonServerImageCreatedFrom createdFrom) {
        this.createdFrom = createdFrom;
        return this;
    }
    @JsonProperty("deleted")
    public String deleted;
    public PutServersId200ApplicationJsonServerImage withDeleted(String deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonProperty("deprecated")
    public String deprecated;
    public PutServersId200ApplicationJsonServerImage withDeprecated(String deprecated) {
        this.deprecated = deprecated;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public PutServersId200ApplicationJsonServerImage withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("disk_size")
    public Double diskSize;
    public PutServersId200ApplicationJsonServerImage withDiskSize(Double diskSize) {
        this.diskSize = diskSize;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PutServersId200ApplicationJsonServerImage withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("image_size")
    public Double imageSize;
    public PutServersId200ApplicationJsonServerImage withImageSize(Double imageSize) {
        this.imageSize = imageSize;
        return this;
    }
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public PutServersId200ApplicationJsonServerImage withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PutServersId200ApplicationJsonServerImage withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("os_flavor")
    public PutServersId200ApplicationJsonServerImageOsFlavorEnum osFlavor;
    public PutServersId200ApplicationJsonServerImage withOsFlavor(PutServersId200ApplicationJsonServerImageOsFlavorEnum osFlavor) {
        this.osFlavor = osFlavor;
        return this;
    }
    @JsonProperty("os_version")
    public String osVersion;
    public PutServersId200ApplicationJsonServerImage withOsVersion(String osVersion) {
        this.osVersion = osVersion;
        return this;
    }
    @JsonProperty("protection")
    public PutServersId200ApplicationJsonServerImageProtection protection;
    public PutServersId200ApplicationJsonServerImage withProtection(PutServersId200ApplicationJsonServerImageProtection protection) {
        this.protection = protection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rapid_deploy")
    public Boolean rapidDeploy;
    public PutServersId200ApplicationJsonServerImage withRapidDeploy(Boolean rapidDeploy) {
        this.rapidDeploy = rapidDeploy;
        return this;
    }
    @JsonProperty("status")
    public PutServersId200ApplicationJsonServerImageStatusEnum status;
    public PutServersId200ApplicationJsonServerImage withStatus(PutServersId200ApplicationJsonServerImageStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("type")
    public PutServersId200ApplicationJsonServerImageTypeEnum type;
    public PutServersId200ApplicationJsonServerImage withType(PutServersId200ApplicationJsonServerImageTypeEnum type) {
        this.type = type;
        return this;
    }
}