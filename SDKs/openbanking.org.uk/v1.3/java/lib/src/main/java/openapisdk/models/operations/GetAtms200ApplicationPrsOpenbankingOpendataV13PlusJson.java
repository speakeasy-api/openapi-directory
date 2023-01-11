package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJson {
    @JsonProperty("data")
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtm[] data;
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJson withData(GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtm[] data) {
        this.data = data;
        return this;
    }
    @JsonProperty("meta")
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData meta;
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJson withMeta(GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData meta) {
        this.meta = meta;
        return this;
    }
}