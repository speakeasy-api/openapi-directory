package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Format
 * The same asset can be represented in different formats, for example, a [WaveFront .obj](//en.wikipedia.org/wiki/Wavefront_.obj_file) file with its corresponding .mtl file or a [Khronos glTF](//www.khronos.org/gltf) file with its corresponding .glb binary data. A format refers to a specific representation of an asset and contains all information needed to retrieve and describe this representation.
**/
public class Format {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formatComplexity")
    public FormatComplexity formatComplexity;
    public Format withFormatComplexity(FormatComplexity formatComplexity) {
        this.formatComplexity = formatComplexity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formatType")
    public String formatType;
    public Format withFormatType(String formatType) {
        this.formatType = formatType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resources")
    public File[] resources;
    public Format withResources(File[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("root")
    public File root;
    public Format withRoot(File root) {
        this.root = root;
        return this;
    }
}