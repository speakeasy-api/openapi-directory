package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionTypePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public Integer appId;
    public GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionTypePathParams withAppId(Integer appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=definitionId")
    public String definitionId;
    public GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionTypePathParams withDefinitionId(String definitionId) {
        this.definitionId = definitionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=functionType")
    public GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionTypeFunctionTypeEnum functionType;
    public GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionTypePathParams withFunctionType(GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionTypeFunctionTypeEnum functionType) {
        this.functionType = functionType;
        return this;
    }
}