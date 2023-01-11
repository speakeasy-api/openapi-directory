package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUnderstandStyleSheetUpdateUnderstandStyleSheetRequest {
    @SpeakeasyMetadata("form:name=StyleSheet")
    public Object styleSheet;
    public UpdateUnderstandStyleSheetUpdateUnderstandStyleSheetRequest withStyleSheet(Object styleSheet) {
        this.styleSheet = styleSheet;
        return this;
    }
}