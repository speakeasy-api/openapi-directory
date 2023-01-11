package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicesForALinePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=line")
    public String line;
    public ServicesForALinePathParams withLine(String line) {
        this.line = line;
        return this;
    }
}