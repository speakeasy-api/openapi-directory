package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDiscoveryengineV1betaPanelInfo
 * Detailed panel information associated with a user event.
**/
public class GoogleCloudDiscoveryengineV1betaPanelInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleCloudDiscoveryengineV1betaPanelInfo withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("panelId")
    public String panelId;
    public GoogleCloudDiscoveryengineV1betaPanelInfo withPanelId(String panelId) {
        this.panelId = panelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("panelPosition")
    public Integer panelPosition;
    public GoogleCloudDiscoveryengineV1betaPanelInfo withPanelPosition(Integer panelPosition) {
        this.panelPosition = panelPosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalPanels")
    public Integer totalPanels;
    public GoogleCloudDiscoveryengineV1betaPanelInfo withTotalPanels(Integer totalPanels) {
        this.totalPanels = totalPanels;
        return this;
    }
}