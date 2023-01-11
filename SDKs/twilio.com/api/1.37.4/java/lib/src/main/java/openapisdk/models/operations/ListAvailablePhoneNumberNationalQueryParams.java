package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAvailablePhoneNumberNationalQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AreaCode")
    public Long areaCode;
    public ListAvailablePhoneNumberNationalQueryParams withAreaCode(Long areaCode) {
        this.areaCode = areaCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Beta")
    public Boolean beta;
    public ListAvailablePhoneNumberNationalQueryParams withBeta(Boolean beta) {
        this.beta = beta;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Contains")
    public String contains;
    public ListAvailablePhoneNumberNationalQueryParams withContains(String contains) {
        this.contains = contains;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Distance")
    public Long distance;
    public ListAvailablePhoneNumberNationalQueryParams withDistance(Long distance) {
        this.distance = distance;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ExcludeAllAddressRequired")
    public Boolean excludeAllAddressRequired;
    public ListAvailablePhoneNumberNationalQueryParams withExcludeAllAddressRequired(Boolean excludeAllAddressRequired) {
        this.excludeAllAddressRequired = excludeAllAddressRequired;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ExcludeForeignAddressRequired")
    public Boolean excludeForeignAddressRequired;
    public ListAvailablePhoneNumberNationalQueryParams withExcludeForeignAddressRequired(Boolean excludeForeignAddressRequired) {
        this.excludeForeignAddressRequired = excludeForeignAddressRequired;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ExcludeLocalAddressRequired")
    public Boolean excludeLocalAddressRequired;
    public ListAvailablePhoneNumberNationalQueryParams withExcludeLocalAddressRequired(Boolean excludeLocalAddressRequired) {
        this.excludeLocalAddressRequired = excludeLocalAddressRequired;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FaxEnabled")
    public Boolean faxEnabled;
    public ListAvailablePhoneNumberNationalQueryParams withFaxEnabled(Boolean faxEnabled) {
        this.faxEnabled = faxEnabled;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InLata")
    public String inLata;
    public ListAvailablePhoneNumberNationalQueryParams withInLata(String inLata) {
        this.inLata = inLata;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InLocality")
    public String inLocality;
    public ListAvailablePhoneNumberNationalQueryParams withInLocality(String inLocality) {
        this.inLocality = inLocality;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InPostalCode")
    public String inPostalCode;
    public ListAvailablePhoneNumberNationalQueryParams withInPostalCode(String inPostalCode) {
        this.inPostalCode = inPostalCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InRateCenter")
    public String inRateCenter;
    public ListAvailablePhoneNumberNationalQueryParams withInRateCenter(String inRateCenter) {
        this.inRateCenter = inRateCenter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InRegion")
    public String inRegion;
    public ListAvailablePhoneNumberNationalQueryParams withInRegion(String inRegion) {
        this.inRegion = inRegion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MmsEnabled")
    public Boolean mmsEnabled;
    public ListAvailablePhoneNumberNationalQueryParams withMmsEnabled(Boolean mmsEnabled) {
        this.mmsEnabled = mmsEnabled;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NearLatLong")
    public String nearLatLong;
    public ListAvailablePhoneNumberNationalQueryParams withNearLatLong(String nearLatLong) {
        this.nearLatLong = nearLatLong;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NearNumber")
    public String nearNumber;
    public ListAvailablePhoneNumberNationalQueryParams withNearNumber(String nearNumber) {
        this.nearNumber = nearNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListAvailablePhoneNumberNationalQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SmsEnabled")
    public Boolean smsEnabled;
    public ListAvailablePhoneNumberNationalQueryParams withSmsEnabled(Boolean smsEnabled) {
        this.smsEnabled = smsEnabled;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VoiceEnabled")
    public Boolean voiceEnabled;
    public ListAvailablePhoneNumberNationalQueryParams withVoiceEnabled(Boolean voiceEnabled) {
        this.voiceEnabled = voiceEnabled;
        return this;
    }
}