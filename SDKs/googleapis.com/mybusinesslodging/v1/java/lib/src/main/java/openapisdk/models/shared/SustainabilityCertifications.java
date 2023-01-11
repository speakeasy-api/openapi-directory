package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SustainabilityCertifications
 * Sustainability certifications the hotel has been awarded.
**/
public class SustainabilityCertifications {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("breeamCertification")
    public SustainabilityCertificationsBreeamCertificationEnum breeamCertification;
    public SustainabilityCertifications withBreeamCertification(SustainabilityCertificationsBreeamCertificationEnum breeamCertification) {
        this.breeamCertification = breeamCertification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("breeamCertificationException")
    public SustainabilityCertificationsBreeamCertificationExceptionEnum breeamCertificationException;
    public SustainabilityCertifications withBreeamCertificationException(SustainabilityCertificationsBreeamCertificationExceptionEnum breeamCertificationException) {
        this.breeamCertificationException = breeamCertificationException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ecoCertifications")
    public EcoCertification[] ecoCertifications;
    public SustainabilityCertifications withEcoCertifications(EcoCertification[] ecoCertifications) {
        this.ecoCertifications = ecoCertifications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("leedCertification")
    public SustainabilityCertificationsLeedCertificationEnum leedCertification;
    public SustainabilityCertifications withLeedCertification(SustainabilityCertificationsLeedCertificationEnum leedCertification) {
        this.leedCertification = leedCertification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("leedCertificationException")
    public SustainabilityCertificationsLeedCertificationExceptionEnum leedCertificationException;
    public SustainabilityCertifications withLeedCertificationException(SustainabilityCertificationsLeedCertificationExceptionEnum leedCertificationException) {
        this.leedCertificationException = leedCertificationException;
        return this;
    }
}