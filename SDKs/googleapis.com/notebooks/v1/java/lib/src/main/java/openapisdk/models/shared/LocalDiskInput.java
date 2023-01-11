package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LocalDiskInput
 * A Local attached disk resource.
**/
public class LocalDiskInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initializeParams")
    public LocalDiskInitializeParams initializeParams;
    public LocalDiskInput withInitializeParams(LocalDiskInitializeParams initializeParams) {
        this.initializeParams = initializeParams;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interface")
    public String interface_;
    public LocalDiskInput withInterface(String interface_) {
        this.interface_ = interface_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mode")
    public String mode;
    public LocalDiskInput withMode(String mode) {
        this.mode = mode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public LocalDiskInput withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public LocalDiskInput withType(String type) {
        this.type = type;
        return this;
    }
}