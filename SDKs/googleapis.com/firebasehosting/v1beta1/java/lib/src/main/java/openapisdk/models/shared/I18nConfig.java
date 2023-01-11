package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * I18nConfig
 * If provided, i18n rewrites are enabled.
**/
public class I18nConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("root")
    public String root;
    public I18nConfig withRoot(String root) {
        this.root = root;
        return this;
    }
}