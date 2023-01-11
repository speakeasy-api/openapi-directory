package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TopicSentimentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=domain")
    public TopicSentimentDomainEnum domain;
    public TopicSentimentQueryParams withDomain(TopicSentimentDomainEnum domain) {
        this.domain = domain;
        return this;
    }
}