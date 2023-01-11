package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("available_phone_numbers")
    public openapisdk.models.shared.ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberLocal[] availablePhoneNumbers;
    public ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse withAvailablePhoneNumbers(openapisdk.models.shared.ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberLocal[] availablePhoneNumbers) {
        this.availablePhoneNumbers = availablePhoneNumbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end")
    public Long end;
    public ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse withEnd(Long end) {
        this.end = end;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_page_uri")
    public String firstPageUri;
    public ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse withFirstPageUri(String firstPageUri) {
        this.firstPageUri = firstPageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_uri")
    public String nextPageUri;
    public ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse withNextPageUri(String nextPageUri) {
        this.nextPageUri = nextPageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Long page;
    public ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse withPage(Long page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous_page_uri")
    public String previousPageUri;
    public ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse withPreviousPageUri(String previousPageUri) {
        this.previousPageUri = previousPageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start")
    public Long start;
    public ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse withStart(Long start) {
        this.start = start;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse withUri(String uri) {
        this.uri = uri;
        return this;
    }
}