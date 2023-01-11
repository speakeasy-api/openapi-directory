package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostServersIdActionsCreateImage201ApplicationJsonImage {
    @JsonProperty("bound_to")
    public Long boundTo;
    public PostServersIdActionsCreateImage201ApplicationJsonImage withBoundTo(Long boundTo) {
        this.boundTo = boundTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("build_id")
    public String buildId;
    public PostServersIdActionsCreateImage201ApplicationJsonImage withBuildId(String buildId) {
        this.buildId = buildId;
        return this;
    }
    @JsonProperty("created")
    public String created;
    public PostServersIdActionsCreateImage201ApplicationJsonImage withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonProperty("created_from")
    public PostServersIdActionsCreateImage201ApplicationJsonImageCreatedFrom createdFrom;
    public PostServersIdActionsCreateImage201ApplicationJsonImage withCreatedFrom(PostServersIdActionsCreateImage201ApplicationJsonImageCreatedFrom createdFrom) {
        this.createdFrom = createdFrom;
        return this;
    }
    @JsonProperty("deleted")
    public String deleted;
    public PostServersIdActionsCreateImage201ApplicationJsonImage withDeleted(String deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonProperty("deprecated")
    public String deprecated;
    public PostServersIdActionsCreateImage201ApplicationJsonImage withDeprecated(String deprecated) {
        this.deprecated = deprecated;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public PostServersIdActionsCreateImage201ApplicationJsonImage withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("disk_size")
    public Double diskSize;
    public PostServersIdActionsCreateImage201ApplicationJsonImage withDiskSize(Double diskSize) {
        this.diskSize = diskSize;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostServersIdActionsCreateImage201ApplicationJsonImage withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("image_size")
    public Double imageSize;
    public PostServersIdActionsCreateImage201ApplicationJsonImage withImageSize(Double imageSize) {
        this.imageSize = imageSize;
        return this;
    }
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public PostServersIdActionsCreateImage201ApplicationJsonImage withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PostServersIdActionsCreateImage201ApplicationJsonImage withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("os_flavor")
    public PostServersIdActionsCreateImage201ApplicationJsonImageOsFlavorEnum osFlavor;
    public PostServersIdActionsCreateImage201ApplicationJsonImage withOsFlavor(PostServersIdActionsCreateImage201ApplicationJsonImageOsFlavorEnum osFlavor) {
        this.osFlavor = osFlavor;
        return this;
    }
    @JsonProperty("os_version")
    public String osVersion;
    public PostServersIdActionsCreateImage201ApplicationJsonImage withOsVersion(String osVersion) {
        this.osVersion = osVersion;
        return this;
    }
    @JsonProperty("protection")
    public PostServersIdActionsCreateImage201ApplicationJsonImageProtection protection;
    public PostServersIdActionsCreateImage201ApplicationJsonImage withProtection(PostServersIdActionsCreateImage201ApplicationJsonImageProtection protection) {
        this.protection = protection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rapid_deploy")
    public Boolean rapidDeploy;
    public PostServersIdActionsCreateImage201ApplicationJsonImage withRapidDeploy(Boolean rapidDeploy) {
        this.rapidDeploy = rapidDeploy;
        return this;
    }
    @JsonProperty("status")
    public PostServersIdActionsCreateImage201ApplicationJsonImageStatusEnum status;
    public PostServersIdActionsCreateImage201ApplicationJsonImage withStatus(PostServersIdActionsCreateImage201ApplicationJsonImageStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("type")
    public PostServersIdActionsCreateImage201ApplicationJsonImageTypeEnum type;
    public PostServersIdActionsCreateImage201ApplicationJsonImage withType(PostServersIdActionsCreateImage201ApplicationJsonImageTypeEnum type) {
        this.type = type;
        return this;
    }
}