package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlInstancesListServerCasSecurity {
    @SpeakeasyMetadata("security:option=true")
    public SqlInstancesListServerCasSecurityOption1 option1;
    public SqlInstancesListServerCasSecurity withOption1(SqlInstancesListServerCasSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public SqlInstancesListServerCasSecurityOption2 option2;
    public SqlInstancesListServerCasSecurity withOption2(SqlInstancesListServerCasSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}