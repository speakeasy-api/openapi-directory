package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListPythonPackagesResponse
 * The response from listing python packages.
**/
public class ListPythonPackagesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListPythonPackagesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pythonPackages")
    public PythonPackage[] pythonPackages;
    public ListPythonPackagesResponse withPythonPackages(PythonPackage[] pythonPackages) {
        this.pythonPackages = pythonPackages;
        return this;
    }
}