package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlInstancesCloneSecurity {
    @SpeakeasyMetadata("security:option=true")
    public SqlInstancesCloneSecurityOption1 option1;
    public SqlInstancesCloneSecurity withOption1(SqlInstancesCloneSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public SqlInstancesCloneSecurityOption2 option2;
    public SqlInstancesCloneSecurity withOption2(SqlInstancesCloneSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}