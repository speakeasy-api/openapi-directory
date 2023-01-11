package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserDefinedVariableConfiguration
 * User Defined Variable configuration.
**/
public class UserDefinedVariableConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataType")
    public UserDefinedVariableConfigurationDataTypeEnum dataType;
    public UserDefinedVariableConfiguration withDataType(UserDefinedVariableConfigurationDataTypeEnum dataType) {
        this.dataType = dataType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportName")
    public String reportName;
    public UserDefinedVariableConfiguration withReportName(String reportName) {
        this.reportName = reportName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("variableType")
    public UserDefinedVariableConfigurationVariableTypeEnum variableType;
    public UserDefinedVariableConfiguration withVariableType(UserDefinedVariableConfigurationVariableTypeEnum variableType) {
        this.variableType = variableType;
        return this;
    }
}