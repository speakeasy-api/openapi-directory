package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListIncomingPhoneNumberTollFreeListIncomingPhoneNumberTollFreeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end")
    public Long end;
    public ListIncomingPhoneNumberTollFreeListIncomingPhoneNumberTollFreeResponse withEnd(Long end) {
        this.end = end;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_page_uri")
    public String firstPageUri;
    public ListIncomingPhoneNumberTollFreeListIncomingPhoneNumberTollFreeResponse withFirstPageUri(String firstPageUri) {
        this.firstPageUri = firstPageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("incoming_phone_numbers")
    public openapisdk.models.shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree[] incomingPhoneNumbers;
    public ListIncomingPhoneNumberTollFreeListIncomingPhoneNumberTollFreeResponse withIncomingPhoneNumbers(openapisdk.models.shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree[] incomingPhoneNumbers) {
        this.incomingPhoneNumbers = incomingPhoneNumbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_uri")
    public String nextPageUri;
    public ListIncomingPhoneNumberTollFreeListIncomingPhoneNumberTollFreeResponse withNextPageUri(String nextPageUri) {
        this.nextPageUri = nextPageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Long page;
    public ListIncomingPhoneNumberTollFreeListIncomingPhoneNumberTollFreeResponse withPage(Long page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public ListIncomingPhoneNumberTollFreeListIncomingPhoneNumberTollFreeResponse withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous_page_uri")
    public String previousPageUri;
    public ListIncomingPhoneNumberTollFreeListIncomingPhoneNumberTollFreeResponse withPreviousPageUri(String previousPageUri) {
        this.previousPageUri = previousPageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start")
    public Long start;
    public ListIncomingPhoneNumberTollFreeListIncomingPhoneNumberTollFreeResponse withStart(Long start) {
        this.start = start;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ListIncomingPhoneNumberTollFreeListIncomingPhoneNumberTollFreeResponse withUri(String uri) {
        this.uri = uri;
        return this;
    }
}