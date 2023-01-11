package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GlossaryList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("glossaries")
    public Glossary[] glossaries;
    public GlossaryList withGlossaries(Glossary[] glossaries) {
        this.glossaries = glossaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public PagingMeta meta;
    public GlossaryList withMeta(PagingMeta meta) {
        this.meta = meta;
        return this;
    }
}