package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1EduData
 * Required Edu Attributes
**/
public class GoogleCloudChannelV1EduData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instituteSize")
    public GoogleCloudChannelV1EduDataInstituteSizeEnum instituteSize;
    public GoogleCloudChannelV1EduData withInstituteSize(GoogleCloudChannelV1EduDataInstituteSizeEnum instituteSize) {
        this.instituteSize = instituteSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instituteType")
    public GoogleCloudChannelV1EduDataInstituteTypeEnum instituteType;
    public GoogleCloudChannelV1EduData withInstituteType(GoogleCloudChannelV1EduDataInstituteTypeEnum instituteType) {
        this.instituteType = instituteType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("website")
    public String website;
    public GoogleCloudChannelV1EduData withWebsite(String website) {
        this.website = website;
        return this;
    }
}