package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Deployment
 * Code and application artifacts used to deploy a version to App Engine.
**/
public class Deployment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("build")
    public BuildInfo build;
    public Deployment withBuild(BuildInfo build) {
        this.build = build;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudBuildOptions")
    public CloudBuildOptions cloudBuildOptions;
    public Deployment withCloudBuildOptions(CloudBuildOptions cloudBuildOptions) {
        this.cloudBuildOptions = cloudBuildOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("container")
    public ContainerInfo container;
    public Deployment withContainer(ContainerInfo container) {
        this.container = container;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("files")
    public java.util.Map<String, FileInfo> files;
    public Deployment withFiles(java.util.Map<String, FileInfo> files) {
        this.files = files;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zip")
    public ZipInfo zip;
    public Deployment withZip(ZipInfo zip) {
        this.zip = zip;
        return this;
    }
}