package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTechniqueVersionDirectivesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=techniqueName")
    public String techniqueName;
    public ListTechniqueVersionDirectivesPathParams withTechniqueName(String techniqueName) {
        this.techniqueName = techniqueName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=techniqueVersion")
    public String techniqueVersion;
    public ListTechniqueVersionDirectivesPathParams withTechniqueVersion(String techniqueVersion) {
        this.techniqueVersion = techniqueVersion;
        return this;
    }
}