package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebAppConfig
 * Configuration metadata of a single Firebase App for the web.
**/
public class WebAppConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiKey")
    public String apiKey;
    public WebAppConfig withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appId")
    public String appId;
    public WebAppConfig withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authDomain")
    public String authDomain;
    public WebAppConfig withAuthDomain(String authDomain) {
        this.authDomain = authDomain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("databaseURL")
    public String databaseURL;
    public WebAppConfig withDatabaseUrl(String databaseURL) {
        this.databaseURL = databaseURL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationId")
    public String locationId;
    public WebAppConfig withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("measurementId")
    public String measurementId;
    public WebAppConfig withMeasurementId(String measurementId) {
        this.measurementId = measurementId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messagingSenderId")
    public String messagingSenderId;
    public WebAppConfig withMessagingSenderId(String messagingSenderId) {
        this.messagingSenderId = messagingSenderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectId")
    public String projectId;
    public WebAppConfig withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storageBucket")
    public String storageBucket;
    public WebAppConfig withStorageBucket(String storageBucket) {
        this.storageBucket = storageBucket;
        return this;
    }
}