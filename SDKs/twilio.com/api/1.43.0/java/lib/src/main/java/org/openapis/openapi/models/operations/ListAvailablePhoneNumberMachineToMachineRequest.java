/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ListAvailablePhoneNumberMachineToMachineRequest {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) requesting the AvailablePhoneNumber resources.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;

    public ListAvailablePhoneNumberMachineToMachineRequest withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    
    /**
     * The area code of the phone numbers to read. Applies to only phone numbers in the US and Canada.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AreaCode")
    public Long areaCode;

    public ListAvailablePhoneNumberMachineToMachineRequest withAreaCode(Long areaCode) {
        this.areaCode = areaCode;
        return this;
    }
    
    /**
     * Whether to read phone numbers that are new to the Twilio platform. Can be: `true` or `false` and the default is `true`.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Beta")
    public Boolean beta;

    public ListAvailablePhoneNumberMachineToMachineRequest withBeta(Boolean beta) {
        this.beta = beta;
        return this;
    }
    
    /**
     * The pattern on which to match phone numbers. Valid characters are `*`, `0-9`, `a-z`, and `A-Z`. The `*` character matches any single digit. For examples, see [Example 2](https://www.twilio.com/docs/phone-numbers/api/availablephonenumber-resource#local-get-basic-example-2) and [Example 3](https://www.twilio.com/docs/phone-numbers/api/availablephonenumber-resource#local-get-basic-example-3). If specified, this value must have at least two characters.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Contains")
    public String contains;

    public ListAvailablePhoneNumberMachineToMachineRequest withContains(String contains) {
        this.contains = contains;
        return this;
    }
    
    /**
     * The [ISO-3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the country from which to read phone numbers.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CountryCode")
    public String countryCode;

    public ListAvailablePhoneNumberMachineToMachineRequest withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    
    /**
     * The search radius, in miles, for a `near_` query.  Can be up to `500` and the default is `25`. Applies to only phone numbers in the US and Canada.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Distance")
    public Long distance;

    public ListAvailablePhoneNumberMachineToMachineRequest withDistance(Long distance) {
        this.distance = distance;
        return this;
    }
    
    /**
     * Whether to exclude phone numbers that require an [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ExcludeAllAddressRequired")
    public Boolean excludeAllAddressRequired;

    public ListAvailablePhoneNumberMachineToMachineRequest withExcludeAllAddressRequired(Boolean excludeAllAddressRequired) {
        this.excludeAllAddressRequired = excludeAllAddressRequired;
        return this;
    }
    
    /**
     * Whether to exclude phone numbers that require a foreign [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ExcludeForeignAddressRequired")
    public Boolean excludeForeignAddressRequired;

    public ListAvailablePhoneNumberMachineToMachineRequest withExcludeForeignAddressRequired(Boolean excludeForeignAddressRequired) {
        this.excludeForeignAddressRequired = excludeForeignAddressRequired;
        return this;
    }
    
    /**
     * Whether to exclude phone numbers that require a local [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ExcludeLocalAddressRequired")
    public Boolean excludeLocalAddressRequired;

    public ListAvailablePhoneNumberMachineToMachineRequest withExcludeLocalAddressRequired(Boolean excludeLocalAddressRequired) {
        this.excludeLocalAddressRequired = excludeLocalAddressRequired;
        return this;
    }
    
    /**
     * Whether the phone numbers can receive faxes. Can be: `true` or `false`.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FaxEnabled")
    public Boolean faxEnabled;

    public ListAvailablePhoneNumberMachineToMachineRequest withFaxEnabled(Boolean faxEnabled) {
        this.faxEnabled = faxEnabled;
        return this;
    }
    
    /**
     * Limit results to a specific local access and transport area ([LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area)). Given a phone number, search within the same [LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area) as that number. Applies to only phone numbers in the US and Canada.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InLata")
    public String inLata;

    public ListAvailablePhoneNumberMachineToMachineRequest withInLata(String inLata) {
        this.inLata = inLata;
        return this;
    }
    
    /**
     * Limit results to a particular locality or city. Given a phone number, search within the same Locality as that number.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InLocality")
    public String inLocality;

    public ListAvailablePhoneNumberMachineToMachineRequest withInLocality(String inLocality) {
        this.inLocality = inLocality;
        return this;
    }
    
    /**
     * Limit results to a particular postal code. Given a phone number, search within the same postal code as that number. Applies to only phone numbers in the US and Canada.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InPostalCode")
    public String inPostalCode;

    public ListAvailablePhoneNumberMachineToMachineRequest withInPostalCode(String inPostalCode) {
        this.inPostalCode = inPostalCode;
        return this;
    }
    
    /**
     * Limit results to a specific rate center, or given a phone number search within the same rate center as that number. Requires `in_lata` to be set as well. Applies to only phone numbers in the US and Canada.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InRateCenter")
    public String inRateCenter;

    public ListAvailablePhoneNumberMachineToMachineRequest withInRateCenter(String inRateCenter) {
        this.inRateCenter = inRateCenter;
        return this;
    }
    
    /**
     * Limit results to a particular region, state, or province. Given a phone number, search within the same region as that number. Applies to only phone numbers in the US and Canada.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InRegion")
    public String inRegion;

    public ListAvailablePhoneNumberMachineToMachineRequest withInRegion(String inRegion) {
        this.inRegion = inRegion;
        return this;
    }
    
    /**
     * Whether the phone numbers can receive MMS messages. Can be: `true` or `false`.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MmsEnabled")
    public Boolean mmsEnabled;

    public ListAvailablePhoneNumberMachineToMachineRequest withMmsEnabled(Boolean mmsEnabled) {
        this.mmsEnabled = mmsEnabled;
        return this;
    }
    
    /**
     * Given a latitude/longitude pair `lat,long` find geographically close numbers within `distance` miles. Applies to only phone numbers in the US and Canada.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NearLatLong")
    public String nearLatLong;

    public ListAvailablePhoneNumberMachineToMachineRequest withNearLatLong(String nearLatLong) {
        this.nearLatLong = nearLatLong;
        return this;
    }
    
    /**
     * Given a phone number, find a geographically close number within `distance` miles. Distance defaults to 25 miles. Applies to only phone numbers in the US and Canada.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NearNumber")
    public String nearNumber;

    public ListAvailablePhoneNumberMachineToMachineRequest withNearNumber(String nearNumber) {
        this.nearNumber = nearNumber;
        return this;
    }
    
    /**
     * The page index. This value is simply for client state.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Page")
    public Long page;

    public ListAvailablePhoneNumberMachineToMachineRequest withPage(Long page) {
        this.page = page;
        return this;
    }
    
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;

    public ListAvailablePhoneNumberMachineToMachineRequest withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    
    /**
     * The page token. This is provided by the API.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageToken")
    public String pageToken;

    public ListAvailablePhoneNumberMachineToMachineRequest withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    
    /**
     * Whether the phone numbers can receive text messages. Can be: `true` or `false`.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SmsEnabled")
    public Boolean smsEnabled;

    public ListAvailablePhoneNumberMachineToMachineRequest withSmsEnabled(Boolean smsEnabled) {
        this.smsEnabled = smsEnabled;
        return this;
    }
    
    /**
     * Whether the phone numbers can receive calls. Can be: `true` or `false`.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VoiceEnabled")
    public Boolean voiceEnabled;

    public ListAvailablePhoneNumberMachineToMachineRequest withVoiceEnabled(Boolean voiceEnabled) {
        this.voiceEnabled = voiceEnabled;
        return this;
    }
    
    public ListAvailablePhoneNumberMachineToMachineRequest(@JsonProperty("AccountSid") String accountSid, @JsonProperty("CountryCode") String countryCode) {
        this.accountSid = accountSid;
        this.countryCode = countryCode;
  }
}
