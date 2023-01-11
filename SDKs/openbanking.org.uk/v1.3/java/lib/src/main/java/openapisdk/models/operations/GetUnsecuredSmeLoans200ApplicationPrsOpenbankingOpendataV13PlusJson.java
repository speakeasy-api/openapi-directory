package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJson {
    @JsonProperty("data")
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData[] data;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJson withData(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData[] data) {
        this.data = data;
        return this;
    }
    @JsonProperty("meta")
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData meta;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJson withMeta(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData meta) {
        this.meta = meta;
        return this;
    }
}