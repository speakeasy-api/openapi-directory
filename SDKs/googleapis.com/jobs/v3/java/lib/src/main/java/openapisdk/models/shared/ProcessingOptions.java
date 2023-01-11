package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProcessingOptions
 * Input only. Options for job processing.
**/
public class ProcessingOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disableStreetAddressResolution")
    public Boolean disableStreetAddressResolution;
    public ProcessingOptions withDisableStreetAddressResolution(Boolean disableStreetAddressResolution) {
        this.disableStreetAddressResolution = disableStreetAddressResolution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("htmlSanitization")
    public ProcessingOptionsHtmlSanitizationEnum htmlSanitization;
    public ProcessingOptions withHtmlSanitization(ProcessingOptionsHtmlSanitizationEnum htmlSanitization) {
        this.htmlSanitization = htmlSanitization;
        return this;
    }
}