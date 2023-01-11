package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDiscoveryengineV1alphaPanelInfo
 * Detailed panel information associated with a user event.
**/
public class GoogleCloudDiscoveryengineV1alphaPanelInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleCloudDiscoveryengineV1alphaPanelInfo withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("panelId")
    public String panelId;
    public GoogleCloudDiscoveryengineV1alphaPanelInfo withPanelId(String panelId) {
        this.panelId = panelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("panelPosition")
    public Integer panelPosition;
    public GoogleCloudDiscoveryengineV1alphaPanelInfo withPanelPosition(Integer panelPosition) {
        this.panelPosition = panelPosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalPanels")
    public Integer totalPanels;
    public GoogleCloudDiscoveryengineV1alphaPanelInfo withTotalPanels(Integer totalPanels) {
        this.totalPanels = totalPanels;
        return this;
    }
}