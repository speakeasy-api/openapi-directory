package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateConferenceUpdateConferenceRequest {
    @SpeakeasyMetadata("form:name=AnnounceMethod")
    public UpdateConferenceUpdateConferenceRequestAnnounceMethodEnum announceMethod;
    public UpdateConferenceUpdateConferenceRequest withAnnounceMethod(UpdateConferenceUpdateConferenceRequestAnnounceMethodEnum announceMethod) {
        this.announceMethod = announceMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=AnnounceUrl")
    public String announceUrl;
    public UpdateConferenceUpdateConferenceRequest withAnnounceUrl(String announceUrl) {
        this.announceUrl = announceUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=Status")
    public openapisdk.models.shared.ConferenceEnumUpdateStatusEnum status;
    public UpdateConferenceUpdateConferenceRequest withStatus(openapisdk.models.shared.ConferenceEnumUpdateStatusEnum status) {
        this.status = status;
        return this;
    }
}