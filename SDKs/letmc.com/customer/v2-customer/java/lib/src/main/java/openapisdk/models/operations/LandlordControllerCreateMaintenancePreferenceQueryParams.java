package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LandlordControllerCreateMaintenancePreferenceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public LandlordControllerCreateMaintenancePreferenceQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=notes")
    public String notes;
    public LandlordControllerCreateMaintenancePreferenceQueryParams withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tenancyID")
    public String tenancyID;
    public LandlordControllerCreateMaintenancePreferenceQueryParams withTenancyId(String tenancyID) {
        this.tenancyID = tenancyID;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public LandlordControllerCreateMaintenancePreferenceQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
}