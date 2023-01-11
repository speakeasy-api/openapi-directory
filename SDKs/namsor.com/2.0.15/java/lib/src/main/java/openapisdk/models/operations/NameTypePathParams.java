package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NameTypePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=properNoun")
    public String properNoun;
    public NameTypePathParams withProperNoun(String properNoun) {
        this.properNoun = properNoun;
        return this;
    }
}