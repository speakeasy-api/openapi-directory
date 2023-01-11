package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListIncomingPhoneNumberListIncomingPhoneNumberResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end")
    public Long end;
    public ListIncomingPhoneNumberListIncomingPhoneNumberResponse withEnd(Long end) {
        this.end = end;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_page_uri")
    public String firstPageUri;
    public ListIncomingPhoneNumberListIncomingPhoneNumberResponse withFirstPageUri(String firstPageUri) {
        this.firstPageUri = firstPageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("incoming_phone_numbers")
    public openapisdk.models.shared.ApiV2010AccountIncomingPhoneNumber[] incomingPhoneNumbers;
    public ListIncomingPhoneNumberListIncomingPhoneNumberResponse withIncomingPhoneNumbers(openapisdk.models.shared.ApiV2010AccountIncomingPhoneNumber[] incomingPhoneNumbers) {
        this.incomingPhoneNumbers = incomingPhoneNumbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_uri")
    public String nextPageUri;
    public ListIncomingPhoneNumberListIncomingPhoneNumberResponse withNextPageUri(String nextPageUri) {
        this.nextPageUri = nextPageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Long page;
    public ListIncomingPhoneNumberListIncomingPhoneNumberResponse withPage(Long page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public ListIncomingPhoneNumberListIncomingPhoneNumberResponse withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous_page_uri")
    public String previousPageUri;
    public ListIncomingPhoneNumberListIncomingPhoneNumberResponse withPreviousPageUri(String previousPageUri) {
        this.previousPageUri = previousPageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start")
    public Long start;
    public ListIncomingPhoneNumberListIncomingPhoneNumberResponse withStart(Long start) {
        this.start = start;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ListIncomingPhoneNumberListIncomingPhoneNumberResponse withUri(String uri) {
        this.uri = uri;
        return this;
    }
}