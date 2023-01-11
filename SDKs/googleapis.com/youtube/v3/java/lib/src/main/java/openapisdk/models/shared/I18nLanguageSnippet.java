package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * I18nLanguageSnippet
 * Basic details about an i18n language, such as language code and human-readable name.
**/
public class I18nLanguageSnippet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hl")
    public String hl;
    public I18nLanguageSnippet withHl(String hl) {
        this.hl = hl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public I18nLanguageSnippet withName(String name) {
        this.name = name;
        return this;
    }
}