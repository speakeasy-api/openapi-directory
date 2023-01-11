package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AnalyzePackagesRequest
 * AnalyzePackagesRequest is the request to analyze a list of packages and create Vulnerability Occurrences for it.
**/
public class AnalyzePackagesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packages")
    public PackageData[] packages;
    public AnalyzePackagesRequest withPackages(PackageData[] packages) {
        this.packages = packages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceUri")
    public String resourceUri;
    public AnalyzePackagesRequest withResourceUri(String resourceUri) {
        this.resourceUri = resourceUri;
        return this;
    }
}