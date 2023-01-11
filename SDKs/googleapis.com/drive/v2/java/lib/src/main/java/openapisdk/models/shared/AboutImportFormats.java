package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AboutImportFormats {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public AboutImportFormats withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targets")
    public String[] targets;
    public AboutImportFormats withTargets(String[] targets) {
        this.targets = targets;
        return this;
    }
}