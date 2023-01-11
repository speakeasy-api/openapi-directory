package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AboutExportFormats {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public AboutExportFormats withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targets")
    public String[] targets;
    public AboutExportFormats withTargets(String[] targets) {
        this.targets = targets;
        return this;
    }
}