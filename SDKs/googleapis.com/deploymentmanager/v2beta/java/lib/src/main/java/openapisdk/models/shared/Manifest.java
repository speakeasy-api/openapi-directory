package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Manifest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config")
    public ConfigFile config;
    public Manifest withConfig(ConfigFile config) {
        this.config = config;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expandedConfig")
    public String expandedConfig;
    public Manifest withExpandedConfig(String expandedConfig) {
        this.expandedConfig = expandedConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Manifest withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imports")
    public ImportFile[] imports;
    public Manifest withImports(ImportFile[] imports) {
        this.imports = imports;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insertTime")
    public String insertTime;
    public Manifest withInsertTime(String insertTime) {
        this.insertTime = insertTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("layout")
    public String layout;
    public Manifest withLayout(String layout) {
        this.layout = layout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manifestSizeBytes")
    public String manifestSizeBytes;
    public Manifest withManifestSizeBytes(String manifestSizeBytes) {
        this.manifestSizeBytes = manifestSizeBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manifestSizeLimitBytes")
    public String manifestSizeLimitBytes;
    public Manifest withManifestSizeLimitBytes(String manifestSizeLimitBytes) {
        this.manifestSizeLimitBytes = manifestSizeLimitBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Manifest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public Manifest withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
}