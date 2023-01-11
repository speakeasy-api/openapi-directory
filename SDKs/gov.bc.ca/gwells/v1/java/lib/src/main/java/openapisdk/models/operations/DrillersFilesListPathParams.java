package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrillersFilesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=person_guid")
    public String personGuid;
    public DrillersFilesListPathParams withPersonGuid(String personGuid) {
        this.personGuid = personGuid;
        return this;
    }
}