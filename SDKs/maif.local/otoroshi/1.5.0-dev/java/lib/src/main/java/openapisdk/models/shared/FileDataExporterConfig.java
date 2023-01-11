package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class FileDataExporterConfig {
    @JsonProperty("path")
    public String path;
    public FileDataExporterConfig withPath(String path) {
        this.path = path;
        return this;
    }
}