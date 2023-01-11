package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAvailablePhoneNumberMobileListAvailablePhoneNumberMobileResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("available_phone_numbers")
    public openapisdk.models.shared.ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberMobile[] availablePhoneNumbers;
    public ListAvailablePhoneNumberMobileListAvailablePhoneNumberMobileResponse withAvailablePhoneNumbers(openapisdk.models.shared.ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberMobile[] availablePhoneNumbers) {
        this.availablePhoneNumbers = availablePhoneNumbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end")
    public Long end;
    public ListAvailablePhoneNumberMobileListAvailablePhoneNumberMobileResponse withEnd(Long end) {
        this.end = end;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_page_uri")
    public String firstPageUri;
    public ListAvailablePhoneNumberMobileListAvailablePhoneNumberMobileResponse withFirstPageUri(String firstPageUri) {
        this.firstPageUri = firstPageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_uri")
    public String nextPageUri;
    public ListAvailablePhoneNumberMobileListAvailablePhoneNumberMobileResponse withNextPageUri(String nextPageUri) {
        this.nextPageUri = nextPageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Long page;
    public ListAvailablePhoneNumberMobileListAvailablePhoneNumberMobileResponse withPage(Long page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public ListAvailablePhoneNumberMobileListAvailablePhoneNumberMobileResponse withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous_page_uri")
    public String previousPageUri;
    public ListAvailablePhoneNumberMobileListAvailablePhoneNumberMobileResponse withPreviousPageUri(String previousPageUri) {
        this.previousPageUri = previousPageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start")
    public Long start;
    public ListAvailablePhoneNumberMobileListAvailablePhoneNumberMobileResponse withStart(Long start) {
        this.start = start;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ListAvailablePhoneNumberMobileListAvailablePhoneNumberMobileResponse withUri(String uri) {
        this.uri = uri;
        return this;
    }
}