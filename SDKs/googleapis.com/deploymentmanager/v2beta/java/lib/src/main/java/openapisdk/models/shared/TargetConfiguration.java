package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TargetConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config")
    public ConfigFile config;
    public TargetConfiguration withConfig(ConfigFile config) {
        this.config = config;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imports")
    public ImportFile[] imports;
    public TargetConfiguration withImports(ImportFile[] imports) {
        this.imports = imports;
        return this;
    }
}