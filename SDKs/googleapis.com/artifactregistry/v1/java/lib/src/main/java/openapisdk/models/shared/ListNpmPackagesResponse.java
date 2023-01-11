package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListNpmPackagesResponse
 * The response from listing npm packages.
**/
public class ListNpmPackagesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListNpmPackagesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("npmPackages")
    public NpmPackage[] npmPackages;
    public ListNpmPackagesResponse withNpmPackages(NpmPackage[] npmPackages) {
        this.npmPackages = npmPackages;
        return this;
    }
}