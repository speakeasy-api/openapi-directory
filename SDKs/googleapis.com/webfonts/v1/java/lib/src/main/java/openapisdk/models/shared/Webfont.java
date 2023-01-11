package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Webfont
 * Metadata describing a family of fonts.
**/
public class Webfont {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public String category;
    public Webfont withCategory(String category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("family")
    public String family;
    public Webfont withFamily(String family) {
        this.family = family;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("files")
    public java.util.Map<String, String> files;
    public Webfont withFiles(java.util.Map<String, String> files) {
        this.files = files;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Webfont withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastModified")
    public String lastModified;
    public Webfont withLastModified(String lastModified) {
        this.lastModified = lastModified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subsets")
    public String[] subsets;
    public Webfont withSubsets(String[] subsets) {
        this.subsets = subsets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("variants")
    public String[] variants;
    public Webfont withVariants(String[] variants) {
        this.variants = variants;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public Webfont withVersion(String version) {
        this.version = version;
        return this;
    }
}