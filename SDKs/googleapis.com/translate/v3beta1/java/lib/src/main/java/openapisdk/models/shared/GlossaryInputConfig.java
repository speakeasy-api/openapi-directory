package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GlossaryInputConfig
 * Input configuration for glossaries.
**/
public class GlossaryInputConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcsSource")
    public GcsSource gcsSource;
    public GlossaryInputConfig withGcsSource(GcsSource gcsSource) {
        this.gcsSource = gcsSource;
        return this;
    }
}