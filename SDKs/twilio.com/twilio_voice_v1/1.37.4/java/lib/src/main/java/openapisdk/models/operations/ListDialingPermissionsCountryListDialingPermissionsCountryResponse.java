package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDialingPermissionsCountryListDialingPermissionsCountryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public openapisdk.models.shared.VoiceV1DialingPermissionsDialingPermissionsCountry[] content;
    public ListDialingPermissionsCountryListDialingPermissionsCountryResponse withContent(openapisdk.models.shared.VoiceV1DialingPermissionsDialingPermissionsCountry[] content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListDialingPermissionsCountryListDialingPermissionsCountryResponseMeta meta;
    public ListDialingPermissionsCountryListDialingPermissionsCountryResponse withMeta(ListDialingPermissionsCountryListDialingPermissionsCountryResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}