package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApplicationList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cert_authority")
    public String certAuthority;
    public ApplicationList withCertAuthority(String certAuthority) {
        this.certAuthority = certAuthority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificate")
    public String certificate;
    public ApplicationList withCertificate(String certificate) {
        this.certificate = certificate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("current_status")
    public ApplicationStatusCode currentStatus;
    public ApplicationList withCurrentStatus(ApplicationStatusCode currentStatus) {
        this.currentStatus = currentStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_status")
    public String displayStatus;
    public ApplicationList withDisplayStatus(String displayStatus) {
        this.displayStatus = displayStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("qualifications")
    public Qualification[] qualifications;
    public ApplicationList withQualifications(Qualification[] qualifications) {
        this.qualifications = qualifications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("removal_date")
    public LocalDate removalDate;
    public ApplicationList withRemovalDate(LocalDate removalDate) {
        this.removalDate = removalDate;
        return this;
    }
    @JsonProperty("subactivity")
    public Subactivity subactivity;
    public ApplicationList withSubactivity(Subactivity subactivity) {
        this.subactivity = subactivity;
        return this;
    }
}