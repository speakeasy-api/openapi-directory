package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlInstancesPromoteReplicaSecurity {
    @SpeakeasyMetadata("security:option=true")
    public SqlInstancesPromoteReplicaSecurityOption1 option1;
    public SqlInstancesPromoteReplicaSecurity withOption1(SqlInstancesPromoteReplicaSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public SqlInstancesPromoteReplicaSecurityOption2 option2;
    public SqlInstancesPromoteReplicaSecurity withOption2(SqlInstancesPromoteReplicaSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}