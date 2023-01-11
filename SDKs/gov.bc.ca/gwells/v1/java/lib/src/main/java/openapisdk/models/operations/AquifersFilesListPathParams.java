package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AquifersFilesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=aquifer_id")
    public String aquiferId;
    public AquifersFilesListPathParams withAquiferId(String aquiferId) {
        this.aquiferId = aquiferId;
        return this;
    }
}