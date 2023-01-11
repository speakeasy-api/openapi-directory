package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlInstancesStartReplicaSecurity {
    @SpeakeasyMetadata("security:option=true")
    public SqlInstancesStartReplicaSecurityOption1 option1;
    public SqlInstancesStartReplicaSecurity withOption1(SqlInstancesStartReplicaSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public SqlInstancesStartReplicaSecurityOption2 option2;
    public SqlInstancesStartReplicaSecurity withOption2(SqlInstancesStartReplicaSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}