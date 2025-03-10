/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UserDefinedVariableConfiguration - User Defined Variable configuration.
 */
public class UserDefinedVariableConfiguration {
    /**
     * Data type for the variable. This is a required field.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataType")
    public UserDefinedVariableConfigurationDataTypeEnum dataType;

    public UserDefinedVariableConfiguration withDataType(UserDefinedVariableConfigurationDataTypeEnum dataType) {
        this.dataType = dataType;
        return this;
    }
    
    /**
     * User-friendly name for the variable which will appear in reports. This is a required field, must be less than 64 characters long, and cannot contain the following characters: ""&lt;&gt;".
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportName")
    public String reportName;

    public UserDefinedVariableConfiguration withReportName(String reportName) {
        this.reportName = reportName;
        return this;
    }
    
    /**
     * Variable name in the tag. This is a required field.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("variableType")
    public UserDefinedVariableConfigurationVariableTypeEnum variableType;

    public UserDefinedVariableConfiguration withVariableType(UserDefinedVariableConfigurationVariableTypeEnum variableType) {
        this.variableType = variableType;
        return this;
    }
    
    public UserDefinedVariableConfiguration(){}
}
