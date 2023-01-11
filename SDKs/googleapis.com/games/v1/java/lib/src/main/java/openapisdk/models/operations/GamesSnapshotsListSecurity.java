package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesSnapshotsListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public GamesSnapshotsListSecurityOption1 option1;
    public GamesSnapshotsListSecurity withOption1(GamesSnapshotsListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public GamesSnapshotsListSecurityOption2 option2;
    public GamesSnapshotsListSecurity withOption2(GamesSnapshotsListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}