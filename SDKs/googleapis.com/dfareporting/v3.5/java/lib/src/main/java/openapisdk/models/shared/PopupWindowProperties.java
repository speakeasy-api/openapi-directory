package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PopupWindowProperties
 * Popup Window Properties.
**/
public class PopupWindowProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimension")
    public Size dimension;
    public PopupWindowProperties withDimension(Size dimension) {
        this.dimension = dimension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offset")
    public OffsetPosition offset;
    public PopupWindowProperties withOffset(OffsetPosition offset) {
        this.offset = offset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("positionType")
    public PopupWindowPropertiesPositionTypeEnum positionType;
    public PopupWindowProperties withPositionType(PopupWindowPropertiesPositionTypeEnum positionType) {
        this.positionType = positionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("showAddressBar")
    public Boolean showAddressBar;
    public PopupWindowProperties withShowAddressBar(Boolean showAddressBar) {
        this.showAddressBar = showAddressBar;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("showMenuBar")
    public Boolean showMenuBar;
    public PopupWindowProperties withShowMenuBar(Boolean showMenuBar) {
        this.showMenuBar = showMenuBar;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("showScrollBar")
    public Boolean showScrollBar;
    public PopupWindowProperties withShowScrollBar(Boolean showScrollBar) {
        this.showScrollBar = showScrollBar;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("showStatusBar")
    public Boolean showStatusBar;
    public PopupWindowProperties withShowStatusBar(Boolean showStatusBar) {
        this.showStatusBar = showStatusBar;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("showToolBar")
    public Boolean showToolBar;
    public PopupWindowProperties withShowToolBar(Boolean showToolBar) {
        this.showToolBar = showToolBar;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public PopupWindowProperties withTitle(String title) {
        this.title = title;
        return this;
    }
}