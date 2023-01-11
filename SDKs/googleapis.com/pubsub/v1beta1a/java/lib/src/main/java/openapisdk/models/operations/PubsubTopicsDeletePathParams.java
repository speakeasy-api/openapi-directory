package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PubsubTopicsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=topic")
    public String topic;
    public PubsubTopicsDeletePathParams withTopic(String topic) {
        this.topic = topic;
        return this;
    }
}