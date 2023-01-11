package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListFaxMediaListFaxMediaResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("media")
    public openapisdk.models.shared.FaxV1FaxFaxMedia[] media;
    public ListFaxMediaListFaxMediaResponse withMedia(openapisdk.models.shared.FaxV1FaxFaxMedia[] media) {
        this.media = media;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListFaxMediaListFaxMediaResponseMeta meta;
    public ListFaxMediaListFaxMediaResponse withMeta(ListFaxMediaListFaxMediaResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}