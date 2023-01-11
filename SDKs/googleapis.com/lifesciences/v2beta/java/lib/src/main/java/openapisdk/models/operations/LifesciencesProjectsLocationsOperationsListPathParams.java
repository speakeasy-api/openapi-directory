package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LifesciencesProjectsLocationsOperationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public LifesciencesProjectsLocationsOperationsListPathParams withName(String name) {
        this.name = name;
        return this;
    }
}