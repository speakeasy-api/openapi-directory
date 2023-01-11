package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteVideoPrivacyDomainPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=domain")
    public String domain;
    public DeleteVideoPrivacyDomainPathParams withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public DeleteVideoPrivacyDomainPathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}