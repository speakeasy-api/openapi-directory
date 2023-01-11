package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJson {
    @JsonProperty("data")
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData[] data;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJson withData(GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData[] data) {
        this.data = data;
        return this;
    }
    @JsonProperty("meta")
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData meta;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJson withMeta(GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData meta) {
        this.meta = meta;
        return this;
    }
}