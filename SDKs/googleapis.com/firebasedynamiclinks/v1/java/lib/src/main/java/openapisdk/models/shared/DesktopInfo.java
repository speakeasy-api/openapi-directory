package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DesktopInfo
 * Desktop related attributes to the Dynamic Link.
**/
public class DesktopInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("desktopFallbackLink")
    public String desktopFallbackLink;
    public DesktopInfo withDesktopFallbackLink(String desktopFallbackLink) {
        this.desktopFallbackLink = desktopFallbackLink;
        return this;
    }
}