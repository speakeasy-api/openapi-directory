package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJson {
    @JsonProperty("data")
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount[] data;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJson withData(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount[] data) {
        this.data = data;
        return this;
    }
    @JsonProperty("meta")
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData meta;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJson withMeta(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData meta) {
        this.meta = meta;
        return this;
    }
}