package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData {
    @JsonProperty("Agreement")
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum agreement;
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData withAgreement(GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum agreement) {
        this.agreement = agreement;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("LastUpdated")
    public OffsetDateTime lastUpdated;
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData withLastUpdated(OffsetDateTime lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonProperty("License")
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum license;
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData withLicense(GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum license) {
        this.license = license;
        return this;
    }
    @JsonProperty("TermsOfUse")
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum termsOfUse;
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData withTermsOfUse(GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum termsOfUse) {
        this.termsOfUse = termsOfUse;
        return this;
    }
    @JsonProperty("TotalResults")
    public Long totalResults;
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData withTotalResults(Long totalResults) {
        this.totalResults = totalResults;
        return this;
    }
}