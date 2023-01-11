package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJson {
    @JsonProperty("data")
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch[] data;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJson withData(GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch[] data) {
        this.data = data;
        return this;
    }
    @JsonProperty("meta")
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData meta;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJson withMeta(GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData meta) {
        this.meta = meta;
        return this;
    }
}