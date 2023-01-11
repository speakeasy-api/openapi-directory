package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostApiTextTransformQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=caseType")
    public openapisdk.models.shared.CaseTypeEnum caseType;
    public PostApiTextTransformQueryParams withCaseType(openapisdk.models.shared.CaseTypeEnum caseType) {
        this.caseType = caseType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=find")
    public String find;
    public PostApiTextTransformQueryParams withFind(String find) {
        this.find = find;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=replace")
    public String replace;
    public PostApiTextTransformQueryParams withReplace(String replace) {
        this.replace = replace;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=textActionType")
    public openapisdk.models.shared.TextActionTypeEnum textActionType;
    public PostApiTextTransformQueryParams withTextActionType(openapisdk.models.shared.TextActionTypeEnum textActionType) {
        this.textActionType = textActionType;
        return this;
    }
}