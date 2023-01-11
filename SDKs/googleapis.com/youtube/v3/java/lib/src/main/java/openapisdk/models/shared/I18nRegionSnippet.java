package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * I18nRegionSnippet
 * Basic details about an i18n region, such as region code and human-readable name.
**/
public class I18nRegionSnippet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gl")
    public String gl;
    public I18nRegionSnippet withGl(String gl) {
        this.gl = gl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public I18nRegionSnippet withName(String name) {
        this.name = name;
        return this;
    }
}