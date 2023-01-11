package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSourceIpMappingListSourceIpMappingResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListSourceIpMappingListSourceIpMappingResponseMeta meta;
    public ListSourceIpMappingListSourceIpMappingResponse withMeta(ListSourceIpMappingListSourceIpMappingResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_ip_mappings")
    public openapisdk.models.shared.VoiceV1SourceIpMapping[] sourceIpMappings;
    public ListSourceIpMappingListSourceIpMappingResponse withSourceIpMappings(openapisdk.models.shared.VoiceV1SourceIpMapping[] sourceIpMappings) {
        this.sourceIpMappings = sourceIpMappings;
        return this;
    }
}