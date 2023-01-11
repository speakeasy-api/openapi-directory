package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TransformDefinitionTransformDefinition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Active")
    public Boolean active;
    public TransformDefinitionTransformDefinition withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContentType")
    public String contentType;
    public TransformDefinitionTransformDefinition withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Definition")
    public String definition;
    public TransformDefinitionTransformDefinition withDefinition(String definition) {
        this.definition = definition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefinitionType")
    public String definitionType;
    public TransformDefinitionTransformDefinition withDefinitionType(String definitionType) {
        this.definitionType = definitionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Readonly")
    public Boolean readonly;
    public TransformDefinitionTransformDefinition withReadonly(Boolean readonly) {
        this.readonly = readonly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SupportedReports")
    public String supportedReports;
    public TransformDefinitionTransformDefinition withSupportedReports(String supportedReports) {
        this.supportedReports = supportedReports;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaxYear")
    public Integer taxYear;
    public TransformDefinitionTransformDefinition withTaxYear(Integer taxYear) {
        this.taxYear = taxYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Title")
    public String title;
    public TransformDefinitionTransformDefinition withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Version")
    public String version;
    public TransformDefinitionTransformDefinition withVersion(String version) {
        this.version = version;
        return this;
    }
}