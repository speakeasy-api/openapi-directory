package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Metadata
 * A Compute Engine metadata entry. Identical to the metadata on the corresponding Compute Engine resource.
**/
public class Metadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fingerPrint")
    public String fingerPrint;
    public Metadata withFingerPrint(String fingerPrint) {
        this.fingerPrint = fingerPrint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public MetadataItem[] items;
    public Metadata withItems(MetadataItem[] items) {
        this.items = items;
        return this;
    }
}