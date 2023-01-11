package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListMetadataImportsResponse
 * Response message for DataprocMetastore.ListMetadataImports.
**/
public class ListMetadataImportsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadataImports")
    public MetadataImport[] metadataImports;
    public ListMetadataImportsResponse withMetadataImports(MetadataImport[] metadataImports) {
        this.metadataImports = metadataImports;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListMetadataImportsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListMetadataImportsResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}