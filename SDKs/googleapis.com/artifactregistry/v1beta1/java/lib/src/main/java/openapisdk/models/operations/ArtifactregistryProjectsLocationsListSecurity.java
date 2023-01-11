package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ArtifactregistryProjectsLocationsListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public ArtifactregistryProjectsLocationsListSecurityOption1 option1;
    public ArtifactregistryProjectsLocationsListSecurity withOption1(ArtifactregistryProjectsLocationsListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public ArtifactregistryProjectsLocationsListSecurityOption2 option2;
    public ArtifactregistryProjectsLocationsListSecurity withOption2(ArtifactregistryProjectsLocationsListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}