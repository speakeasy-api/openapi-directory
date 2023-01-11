package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesSnapshotsGetSecurity {
    @SpeakeasyMetadata("security:option=true")
    public GamesSnapshotsGetSecurityOption1 option1;
    public GamesSnapshotsGetSecurity withOption1(GamesSnapshotsGetSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public GamesSnapshotsGetSecurityOption2 option2;
    public GamesSnapshotsGetSecurity withOption2(GamesSnapshotsGetSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}