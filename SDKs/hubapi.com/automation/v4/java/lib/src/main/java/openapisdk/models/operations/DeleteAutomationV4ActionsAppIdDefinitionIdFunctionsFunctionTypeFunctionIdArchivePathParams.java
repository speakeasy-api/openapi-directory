package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchivePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public Integer appId;
    public DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchivePathParams withAppId(Integer appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=definitionId")
    public String definitionId;
    public DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchivePathParams withDefinitionId(String definitionId) {
        this.definitionId = definitionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=functionId")
    public String functionId;
    public DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchivePathParams withFunctionId(String functionId) {
        this.functionId = functionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=functionType")
    public DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchiveFunctionTypeEnum functionType;
    public DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchivePathParams withFunctionType(DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchiveFunctionTypeEnum functionType) {
        this.functionType = functionType;
        return this;
    }
}