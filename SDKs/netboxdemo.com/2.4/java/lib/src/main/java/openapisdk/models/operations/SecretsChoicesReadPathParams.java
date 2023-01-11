package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecretsChoicesReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public SecretsChoicesReadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}