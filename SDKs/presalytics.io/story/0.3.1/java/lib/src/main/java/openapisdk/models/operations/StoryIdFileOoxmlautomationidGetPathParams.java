package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StoryIdFileOoxmlautomationidGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public StoryIdFileOoxmlautomationidGetPathParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ooxml_automation_id")
    public String ooxmlAutomationId;
    public StoryIdFileOoxmlautomationidGetPathParams withOoxmlAutomationId(String ooxmlAutomationId) {
        this.ooxmlAutomationId = ooxmlAutomationId;
        return this;
    }
}