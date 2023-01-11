package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebasestorageProjectsBucketsListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public FirebasestorageProjectsBucketsListSecurityOption1 option1;
    public FirebasestorageProjectsBucketsListSecurity withOption1(FirebasestorageProjectsBucketsListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public FirebasestorageProjectsBucketsListSecurityOption2 option2;
    public FirebasestorageProjectsBucketsListSecurity withOption2(FirebasestorageProjectsBucketsListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}