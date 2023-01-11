package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PreprintsCreatePreprintRelationshipsInput
 * URLs to other entities or entity collections that have a relationship to the preprint entity.
**/
public class PreprintsCreatePreprintRelationshipsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("license")
    public String license;
    public PreprintsCreatePreprintRelationshipsInput withLicense(String license) {
        this.license = license;
        return this;
    }
    @JsonProperty("node")
    public String node;
    public PreprintsCreatePreprintRelationshipsInput withNode(String node) {
        this.node = node;
        return this;
    }
    @JsonProperty("primary_file")
    public String primaryFile;
    public PreprintsCreatePreprintRelationshipsInput withPrimaryFile(String primaryFile) {
        this.primaryFile = primaryFile;
        return this;
    }
    @JsonProperty("provider")
    public String provider;
    public PreprintsCreatePreprintRelationshipsInput withProvider(String provider) {
        this.provider = provider;
        return this;
    }
}