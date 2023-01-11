package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherEditsCountryavailabilityGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=editId")
    public String editId;
    public AndroidpublisherEditsCountryavailabilityGetPathParams withEditId(String editId) {
        this.editId = editId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=packageName")
    public String packageName;
    public AndroidpublisherEditsCountryavailabilityGetPathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=track")
    public String track;
    public AndroidpublisherEditsCountryavailabilityGetPathParams withTrack(String track) {
        this.track = track;
        return this;
    }
}