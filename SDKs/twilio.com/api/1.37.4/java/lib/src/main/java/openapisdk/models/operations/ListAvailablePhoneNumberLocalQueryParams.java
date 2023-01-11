package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAvailablePhoneNumberLocalQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AreaCode")
    public Long areaCode;
    public ListAvailablePhoneNumberLocalQueryParams withAreaCode(Long areaCode) {
        this.areaCode = areaCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Beta")
    public Boolean beta;
    public ListAvailablePhoneNumberLocalQueryParams withBeta(Boolean beta) {
        this.beta = beta;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Contains")
    public String contains;
    public ListAvailablePhoneNumberLocalQueryParams withContains(String contains) {
        this.contains = contains;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Distance")
    public Long distance;
    public ListAvailablePhoneNumberLocalQueryParams withDistance(Long distance) {
        this.distance = distance;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ExcludeAllAddressRequired")
    public Boolean excludeAllAddressRequired;
    public ListAvailablePhoneNumberLocalQueryParams withExcludeAllAddressRequired(Boolean excludeAllAddressRequired) {
        this.excludeAllAddressRequired = excludeAllAddressRequired;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ExcludeForeignAddressRequired")
    public Boolean excludeForeignAddressRequired;
    public ListAvailablePhoneNumberLocalQueryParams withExcludeForeignAddressRequired(Boolean excludeForeignAddressRequired) {
        this.excludeForeignAddressRequired = excludeForeignAddressRequired;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ExcludeLocalAddressRequired")
    public Boolean excludeLocalAddressRequired;
    public ListAvailablePhoneNumberLocalQueryParams withExcludeLocalAddressRequired(Boolean excludeLocalAddressRequired) {
        this.excludeLocalAddressRequired = excludeLocalAddressRequired;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FaxEnabled")
    public Boolean faxEnabled;
    public ListAvailablePhoneNumberLocalQueryParams withFaxEnabled(Boolean faxEnabled) {
        this.faxEnabled = faxEnabled;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InLata")
    public String inLata;
    public ListAvailablePhoneNumberLocalQueryParams withInLata(String inLata) {
        this.inLata = inLata;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InLocality")
    public String inLocality;
    public ListAvailablePhoneNumberLocalQueryParams withInLocality(String inLocality) {
        this.inLocality = inLocality;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InPostalCode")
    public String inPostalCode;
    public ListAvailablePhoneNumberLocalQueryParams withInPostalCode(String inPostalCode) {
        this.inPostalCode = inPostalCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InRateCenter")
    public String inRateCenter;
    public ListAvailablePhoneNumberLocalQueryParams withInRateCenter(String inRateCenter) {
        this.inRateCenter = inRateCenter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InRegion")
    public String inRegion;
    public ListAvailablePhoneNumberLocalQueryParams withInRegion(String inRegion) {
        this.inRegion = inRegion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MmsEnabled")
    public Boolean mmsEnabled;
    public ListAvailablePhoneNumberLocalQueryParams withMmsEnabled(Boolean mmsEnabled) {
        this.mmsEnabled = mmsEnabled;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NearLatLong")
    public String nearLatLong;
    public ListAvailablePhoneNumberLocalQueryParams withNearLatLong(String nearLatLong) {
        this.nearLatLong = nearLatLong;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NearNumber")
    public String nearNumber;
    public ListAvailablePhoneNumberLocalQueryParams withNearNumber(String nearNumber) {
        this.nearNumber = nearNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListAvailablePhoneNumberLocalQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SmsEnabled")
    public Boolean smsEnabled;
    public ListAvailablePhoneNumberLocalQueryParams withSmsEnabled(Boolean smsEnabled) {
        this.smsEnabled = smsEnabled;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VoiceEnabled")
    public Boolean voiceEnabled;
    public ListAvailablePhoneNumberLocalQueryParams withVoiceEnabled(Boolean voiceEnabled) {
        this.voiceEnabled = voiceEnabled;
        return this;
    }
}