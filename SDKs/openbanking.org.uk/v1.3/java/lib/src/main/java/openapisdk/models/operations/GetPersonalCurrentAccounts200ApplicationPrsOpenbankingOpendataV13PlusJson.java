package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJson {
    @JsonProperty("data")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData[] data;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJson withData(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData[] data) {
        this.data = data;
        return this;
    }
    @JsonProperty("meta")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData meta;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJson withMeta(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData meta) {
        this.meta = meta;
        return this;
    }
}