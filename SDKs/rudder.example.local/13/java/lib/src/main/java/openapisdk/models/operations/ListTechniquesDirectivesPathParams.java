package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTechniquesDirectivesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=techniqueName")
    public String techniqueName;
    public ListTechniquesDirectivesPathParams withTechniqueName(String techniqueName) {
        this.techniqueName = techniqueName;
        return this;
    }
}