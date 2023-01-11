package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Changelog {
    @JsonProperty("body")
    public String body;
    public Changelog withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hidden")
    public Boolean hidden;
    public Changelog withHidden(Boolean hidden) {
        this.hidden = hidden;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public Changelog withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ChangelogTypeEnum type;
    public Changelog withType(ChangelogTypeEnum type) {
        this.type = type;
        return this;
    }
}