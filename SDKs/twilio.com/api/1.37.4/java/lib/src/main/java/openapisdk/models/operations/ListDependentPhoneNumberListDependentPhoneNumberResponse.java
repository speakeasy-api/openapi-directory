package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDependentPhoneNumberListDependentPhoneNumberResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dependent_phone_numbers")
    public openapisdk.models.shared.ApiV2010AccountAddressDependentPhoneNumber[] dependentPhoneNumbers;
    public ListDependentPhoneNumberListDependentPhoneNumberResponse withDependentPhoneNumbers(openapisdk.models.shared.ApiV2010AccountAddressDependentPhoneNumber[] dependentPhoneNumbers) {
        this.dependentPhoneNumbers = dependentPhoneNumbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end")
    public Long end;
    public ListDependentPhoneNumberListDependentPhoneNumberResponse withEnd(Long end) {
        this.end = end;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_page_uri")
    public String firstPageUri;
    public ListDependentPhoneNumberListDependentPhoneNumberResponse withFirstPageUri(String firstPageUri) {
        this.firstPageUri = firstPageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_uri")
    public String nextPageUri;
    public ListDependentPhoneNumberListDependentPhoneNumberResponse withNextPageUri(String nextPageUri) {
        this.nextPageUri = nextPageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Long page;
    public ListDependentPhoneNumberListDependentPhoneNumberResponse withPage(Long page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public ListDependentPhoneNumberListDependentPhoneNumberResponse withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous_page_uri")
    public String previousPageUri;
    public ListDependentPhoneNumberListDependentPhoneNumberResponse withPreviousPageUri(String previousPageUri) {
        this.previousPageUri = previousPageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start")
    public Long start;
    public ListDependentPhoneNumberListDependentPhoneNumberResponse withStart(Long start) {
        this.start = start;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ListDependentPhoneNumberListDependentPhoneNumberResponse withUri(String uri) {
        this.uri = uri;
        return this;
    }
}