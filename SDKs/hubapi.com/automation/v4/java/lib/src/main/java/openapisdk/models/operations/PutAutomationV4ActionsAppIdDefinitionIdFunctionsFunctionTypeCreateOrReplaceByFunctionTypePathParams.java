package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public Integer appId;
    public PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypePathParams withAppId(Integer appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=definitionId")
    public String definitionId;
    public PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypePathParams withDefinitionId(String definitionId) {
        this.definitionId = definitionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=functionType")
    public PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeFunctionTypeEnum functionType;
    public PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypePathParams withFunctionType(PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeFunctionTypeEnum functionType) {
        this.functionType = functionType;
        return this;
    }
}