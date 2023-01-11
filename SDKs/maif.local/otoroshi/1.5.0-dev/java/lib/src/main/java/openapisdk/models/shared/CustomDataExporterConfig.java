package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CustomDataExporterConfig {
    @JsonProperty("config")
    public java.util.Map<String, String> config;
    public CustomDataExporterConfig withConfig(java.util.Map<String, String> config) {
        this.config = config;
        return this;
    }
    @JsonProperty("ref")
    public String ref;
    public CustomDataExporterConfig withRef(String ref) {
        this.ref = ref;
        return this;
    }
}