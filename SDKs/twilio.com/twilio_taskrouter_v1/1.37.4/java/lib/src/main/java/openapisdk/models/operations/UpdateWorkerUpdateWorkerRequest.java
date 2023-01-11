package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateWorkerUpdateWorkerRequest {
    @SpeakeasyMetadata("form:name=ActivitySid")
    public String activitySid;
    public UpdateWorkerUpdateWorkerRequest withActivitySid(String activitySid) {
        this.activitySid = activitySid;
        return this;
    }
    @SpeakeasyMetadata("form:name=Attributes")
    public String attributes;
    public UpdateWorkerUpdateWorkerRequest withAttributes(String attributes) {
        this.attributes = attributes;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateWorkerUpdateWorkerRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=RejectPendingReservations")
    public Boolean rejectPendingReservations;
    public UpdateWorkerUpdateWorkerRequest withRejectPendingReservations(Boolean rejectPendingReservations) {
        this.rejectPendingReservations = rejectPendingReservations;
        return this;
    }
}