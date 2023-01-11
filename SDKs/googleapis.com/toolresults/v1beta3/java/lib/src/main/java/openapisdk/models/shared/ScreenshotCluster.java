package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScreenshotCluster {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activity")
    public String activity;
    public ScreenshotCluster withActivity(String activity) {
        this.activity = activity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterId")
    public String clusterId;
    public ScreenshotCluster withClusterId(String clusterId) {
        this.clusterId = clusterId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyScreen")
    public Screen keyScreen;
    public ScreenshotCluster withKeyScreen(Screen keyScreen) {
        this.keyScreen = keyScreen;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("screens")
    public Screen[] screens;
    public ScreenshotCluster withScreens(Screen[] screens) {
        this.screens = screens;
        return this;
    }
}