package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiClassifiersStatusOut {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classifiers")
    public ApiClassifierOut[] classifiers;
    public ApiClassifiersStatusOut withClassifiers(ApiClassifierOut[] classifiers) {
        this.classifiers = classifiers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("softwareVersion")
    public SoftwareVersionOut softwareVersion;
    public ApiClassifiersStatusOut withSoftwareVersion(SoftwareVersionOut softwareVersion) {
        this.softwareVersion = softwareVersion;
        return this;
    }
}