package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AnalyzePackagesRequestV1
 * AnalyzePackagesRequest is the request to analyze a list of packages and create Vulnerability Occurrences for it.
**/
public class AnalyzePackagesRequestV1 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeOsvData")
    public Boolean includeOsvData;
    public AnalyzePackagesRequestV1 withIncludeOsvData(Boolean includeOsvData) {
        this.includeOsvData = includeOsvData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packages")
    public PackageData[] packages;
    public AnalyzePackagesRequestV1 withPackages(PackageData[] packages) {
        this.packages = packages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceUri")
    public String resourceUri;
    public AnalyzePackagesRequestV1 withResourceUri(String resourceUri) {
        this.resourceUri = resourceUri;
        return this;
    }
}