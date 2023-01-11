package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData {
    @JsonProperty("Agreement")
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum agreement;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData withAgreement(GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum agreement) {
        this.agreement = agreement;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("LastUpdated")
    public OffsetDateTime lastUpdated;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData withLastUpdated(OffsetDateTime lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonProperty("License")
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum license;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData withLicense(GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum license) {
        this.license = license;
        return this;
    }
    @JsonProperty("TermsOfUse")
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum termsOfUse;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData withTermsOfUse(GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum termsOfUse) {
        this.termsOfUse = termsOfUse;
        return this;
    }
    @JsonProperty("TotalResults")
    public Long totalResults;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData withTotalResults(Long totalResults) {
        this.totalResults = totalResults;
        return this;
    }
}