package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PubsubTopicsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=topic")
    public String topic;
    public PubsubTopicsGetPathParams withTopic(String topic) {
        this.topic = topic;
        return this;
    }
}