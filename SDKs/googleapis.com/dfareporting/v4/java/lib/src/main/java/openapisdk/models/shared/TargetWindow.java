package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TargetWindow
 * Target Window.
**/
public class TargetWindow {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customHtml")
    public String customHtml;
    public TargetWindow withCustomHtml(String customHtml) {
        this.customHtml = customHtml;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetWindowOption")
    public TargetWindowTargetWindowOptionEnum targetWindowOption;
    public TargetWindow withTargetWindowOption(TargetWindowTargetWindowOptionEnum targetWindowOption) {
        this.targetWindowOption = targetWindowOption;
        return this;
    }
}