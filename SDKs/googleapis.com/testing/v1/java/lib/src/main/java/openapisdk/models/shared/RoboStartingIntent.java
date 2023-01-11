package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RoboStartingIntent
 * Message for specifying the start activities to crawl.
**/
public class RoboStartingIntent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("launcherActivity")
    public java.util.Map<String, Object> launcherActivity;
    public RoboStartingIntent withLauncherActivity(java.util.Map<String, Object> launcherActivity) {
        this.launcherActivity = launcherActivity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startActivity")
    public StartActivityIntent startActivity;
    public RoboStartingIntent withStartActivity(StartActivityIntent startActivity) {
        this.startActivity = startActivity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeout")
    public String timeout;
    public RoboStartingIntent withTimeout(String timeout) {
        this.timeout = timeout;
        return this;
    }
}