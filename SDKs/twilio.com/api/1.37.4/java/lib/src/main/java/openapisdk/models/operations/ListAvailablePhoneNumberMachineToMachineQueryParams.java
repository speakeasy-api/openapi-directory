package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAvailablePhoneNumberMachineToMachineQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AreaCode")
    public Long areaCode;
    public ListAvailablePhoneNumberMachineToMachineQueryParams withAreaCode(Long areaCode) {
        this.areaCode = areaCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Beta")
    public Boolean beta;
    public ListAvailablePhoneNumberMachineToMachineQueryParams withBeta(Boolean beta) {
        this.beta = beta;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Contains")
    public String contains;
    public ListAvailablePhoneNumberMachineToMachineQueryParams withContains(String contains) {
        this.contains = contains;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Distance")
    public Long distance;
    public ListAvailablePhoneNumberMachineToMachineQueryParams withDistance(Long distance) {
        this.distance = distance;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ExcludeAllAddressRequired")
    public Boolean excludeAllAddressRequired;
    public ListAvailablePhoneNumberMachineToMachineQueryParams withExcludeAllAddressRequired(Boolean excludeAllAddressRequired) {
        this.excludeAllAddressRequired = excludeAllAddressRequired;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ExcludeForeignAddressRequired")
    public Boolean excludeForeignAddressRequired;
    public ListAvailablePhoneNumberMachineToMachineQueryParams withExcludeForeignAddressRequired(Boolean excludeForeignAddressRequired) {
        this.excludeForeignAddressRequired = excludeForeignAddressRequired;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ExcludeLocalAddressRequired")
    public Boolean excludeLocalAddressRequired;
    public ListAvailablePhoneNumberMachineToMachineQueryParams withExcludeLocalAddressRequired(Boolean excludeLocalAddressRequired) {
        this.excludeLocalAddressRequired = excludeLocalAddressRequired;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FaxEnabled")
    public Boolean faxEnabled;
    public ListAvailablePhoneNumberMachineToMachineQueryParams withFaxEnabled(Boolean faxEnabled) {
        this.faxEnabled = faxEnabled;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InLata")
    public String inLata;
    public ListAvailablePhoneNumberMachineToMachineQueryParams withInLata(String inLata) {
        this.inLata = inLata;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InLocality")
    public String inLocality;
    public ListAvailablePhoneNumberMachineToMachineQueryParams withInLocality(String inLocality) {
        this.inLocality = inLocality;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InPostalCode")
    public String inPostalCode;
    public ListAvailablePhoneNumberMachineToMachineQueryParams withInPostalCode(String inPostalCode) {
        this.inPostalCode = inPostalCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InRateCenter")
    public String inRateCenter;
    public ListAvailablePhoneNumberMachineToMachineQueryParams withInRateCenter(String inRateCenter) {
        this.inRateCenter = inRateCenter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InRegion")
    public String inRegion;
    public ListAvailablePhoneNumberMachineToMachineQueryParams withInRegion(String inRegion) {
        this.inRegion = inRegion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MmsEnabled")
    public Boolean mmsEnabled;
    public ListAvailablePhoneNumberMachineToMachineQueryParams withMmsEnabled(Boolean mmsEnabled) {
        this.mmsEnabled = mmsEnabled;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NearLatLong")
    public String nearLatLong;
    public ListAvailablePhoneNumberMachineToMachineQueryParams withNearLatLong(String nearLatLong) {
        this.nearLatLong = nearLatLong;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NearNumber")
    public String nearNumber;
    public ListAvailablePhoneNumberMachineToMachineQueryParams withNearNumber(String nearNumber) {
        this.nearNumber = nearNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListAvailablePhoneNumberMachineToMachineQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SmsEnabled")
    public Boolean smsEnabled;
    public ListAvailablePhoneNumberMachineToMachineQueryParams withSmsEnabled(Boolean smsEnabled) {
        this.smsEnabled = smsEnabled;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VoiceEnabled")
    public Boolean voiceEnabled;
    public ListAvailablePhoneNumberMachineToMachineQueryParams withVoiceEnabled(Boolean voiceEnabled) {
        this.voiceEnabled = voiceEnabled;
        return this;
    }
}