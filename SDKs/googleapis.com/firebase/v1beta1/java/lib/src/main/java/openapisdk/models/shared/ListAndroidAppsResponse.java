package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAndroidAppsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apps")
    public AndroidApp[] apps;
    public ListAndroidAppsResponse withApps(AndroidApp[] apps) {
        this.apps = apps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListAndroidAppsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}