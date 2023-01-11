package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData {
    @JsonProperty("Agreement")
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum agreement;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData withAgreement(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum agreement) {
        this.agreement = agreement;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("LastUpdated")
    public OffsetDateTime lastUpdated;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData withLastUpdated(OffsetDateTime lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonProperty("License")
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum license;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData withLicense(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum license) {
        this.license = license;
        return this;
    }
    @JsonProperty("TermsOfUse")
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum termsOfUse;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData withTermsOfUse(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum termsOfUse) {
        this.termsOfUse = termsOfUse;
        return this;
    }
    @JsonProperty("TotalResults")
    public Long totalResults;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData withTotalResults(Long totalResults) {
        this.totalResults = totalResults;
        return this;
    }
}