package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiClassifierTaxonomyOut {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classifierName")
    public String classifierName;
    public ApiClassifierTaxonomyOut withClassifierName(String classifierName) {
        this.classifierName = classifierName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxonomyClasses")
    public String[] taxonomyClasses;
    public ApiClassifierTaxonomyOut withTaxonomyClasses(String[] taxonomyClasses) {
        this.taxonomyClasses = taxonomyClasses;
        return this;
    }
}