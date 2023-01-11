package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LifesciencesProjectsLocationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public LifesciencesProjectsLocationsListPathParams withName(String name) {
        this.name = name;
        return this;
    }
}