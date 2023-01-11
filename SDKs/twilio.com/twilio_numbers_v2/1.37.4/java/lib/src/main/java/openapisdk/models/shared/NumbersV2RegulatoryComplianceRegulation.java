package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NumbersV2RegulatoryComplianceRegulation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_user_type")
    public RegulationEnumEndUserTypeEnum endUserType;
    public NumbersV2RegulatoryComplianceRegulation withEndUserType(RegulationEnumEndUserTypeEnum endUserType) {
        this.endUserType = endUserType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendly_name")
    public String friendlyName;
    public NumbersV2RegulatoryComplianceRegulation withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iso_country")
    public String isoCountry;
    public NumbersV2RegulatoryComplianceRegulation withIsoCountry(String isoCountry) {
        this.isoCountry = isoCountry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number_type")
    public String numberType;
    public NumbersV2RegulatoryComplianceRegulation withNumberType(String numberType) {
        this.numberType = numberType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requirements")
    public Object requirements;
    public NumbersV2RegulatoryComplianceRegulation withRequirements(Object requirements) {
        this.requirements = requirements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public NumbersV2RegulatoryComplianceRegulation withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public NumbersV2RegulatoryComplianceRegulation withUrl(String url) {
        this.url = url;
        return this;
    }
}