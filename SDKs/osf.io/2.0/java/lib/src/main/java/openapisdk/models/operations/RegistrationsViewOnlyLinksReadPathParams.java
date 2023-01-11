package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistrationsViewOnlyLinksReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=link_id")
    public String linkId;
    public RegistrationsViewOnlyLinksReadPathParams withLinkId(String linkId) {
        this.linkId = linkId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=registration_id")
    public String registrationId;
    public RegistrationsViewOnlyLinksReadPathParams withRegistrationId(String registrationId) {
        this.registrationId = registrationId;
        return this;
    }
}