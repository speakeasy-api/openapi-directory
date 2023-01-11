package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StoryIdFileOoxmlautomationidDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public StoryIdFileOoxmlautomationidDeletePathParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ooxml_automation_id")
    public String ooxmlAutomationId;
    public StoryIdFileOoxmlautomationidDeletePathParams withOoxmlAutomationId(String ooxmlAutomationId) {
        this.ooxmlAutomationId = ooxmlAutomationId;
        return this;
    }
}