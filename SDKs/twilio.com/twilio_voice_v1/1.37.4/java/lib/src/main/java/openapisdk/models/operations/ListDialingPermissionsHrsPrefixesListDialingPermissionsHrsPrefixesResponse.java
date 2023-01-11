package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public openapisdk.models.shared.VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes[] content;
    public ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse withContent(openapisdk.models.shared.VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes[] content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponseMeta meta;
    public ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse withMeta(ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}