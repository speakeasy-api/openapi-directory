package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAvailablePhoneNumberNationalListAvailablePhoneNumberNationalResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("available_phone_numbers")
    public openapisdk.models.shared.ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNational[] availablePhoneNumbers;
    public ListAvailablePhoneNumberNationalListAvailablePhoneNumberNationalResponse withAvailablePhoneNumbers(openapisdk.models.shared.ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNational[] availablePhoneNumbers) {
        this.availablePhoneNumbers = availablePhoneNumbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end")
    public Long end;
    public ListAvailablePhoneNumberNationalListAvailablePhoneNumberNationalResponse withEnd(Long end) {
        this.end = end;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_page_uri")
    public String firstPageUri;
    public ListAvailablePhoneNumberNationalListAvailablePhoneNumberNationalResponse withFirstPageUri(String firstPageUri) {
        this.firstPageUri = firstPageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_uri")
    public String nextPageUri;
    public ListAvailablePhoneNumberNationalListAvailablePhoneNumberNationalResponse withNextPageUri(String nextPageUri) {
        this.nextPageUri = nextPageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Long page;
    public ListAvailablePhoneNumberNationalListAvailablePhoneNumberNationalResponse withPage(Long page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public ListAvailablePhoneNumberNationalListAvailablePhoneNumberNationalResponse withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous_page_uri")
    public String previousPageUri;
    public ListAvailablePhoneNumberNationalListAvailablePhoneNumberNationalResponse withPreviousPageUri(String previousPageUri) {
        this.previousPageUri = previousPageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start")
    public Long start;
    public ListAvailablePhoneNumberNationalListAvailablePhoneNumberNationalResponse withStart(Long start) {
        this.start = start;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ListAvailablePhoneNumberNationalListAvailablePhoneNumberNationalResponse withUri(String uri) {
        this.uri = uri;
        return this;
    }
}