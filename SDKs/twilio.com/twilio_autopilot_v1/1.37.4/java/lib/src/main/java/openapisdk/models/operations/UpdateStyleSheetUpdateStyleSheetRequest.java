package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateStyleSheetUpdateStyleSheetRequest {
    @SpeakeasyMetadata("form:name=StyleSheet")
    public Object styleSheet;
    public UpdateStyleSheetUpdateStyleSheetRequest withStyleSheet(Object styleSheet) {
        this.styleSheet = styleSheet;
        return this;
    }
}