package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EchoQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public EchoQueryParams withText(String text) {
        this.text = text;
        return this;
    }
}