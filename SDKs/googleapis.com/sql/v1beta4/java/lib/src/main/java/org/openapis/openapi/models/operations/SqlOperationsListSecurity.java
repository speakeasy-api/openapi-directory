/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class SqlOperationsListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public SqlOperationsListSecurityOption1 option1;

    public SqlOperationsListSecurity withOption1(SqlOperationsListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    
    @SpeakeasyMetadata("security:option=true")
    public SqlOperationsListSecurityOption2 option2;

    public SqlOperationsListSecurity withOption2(SqlOperationsListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
    
    public SqlOperationsListSecurity(){}
}
