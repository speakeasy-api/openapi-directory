package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ExecBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action_specific_property1")
    public String actionSpecificProperty1;
    public ExecBody withActionSpecificProperty1(String actionSpecificProperty1) {
        this.actionSpecificProperty1 = actionSpecificProperty1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action_specific_property2")
    public String actionSpecificProperty2;
    public ExecBody withActionSpecificProperty2(String actionSpecificProperty2) {
        this.actionSpecificProperty2 = actionSpecificProperty2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osdb:body_data_encoding")
    public String osdbBodyDataEncoding;
    public ExecBody withOsdbBodyDataEncoding(String osdbBodyDataEncoding) {
        this.osdbBodyDataEncoding = osdbBodyDataEncoding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osdb:body_data_raw")
    public String osdbBodyDataRaw;
    public ExecBody withOsdbBodyDataRaw(String osdbBodyDataRaw) {
        this.osdbBodyDataRaw = osdbBodyDataRaw;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osdb:body_data_src_url")
    public String osdbBodyDataSrcUrl;
    public ExecBody withOsdbBodyDataSrcUrl(String osdbBodyDataSrcUrl) {
        this.osdbBodyDataSrcUrl = osdbBodyDataSrcUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osdb:output_type")
    public ExecBodyOsdbOutputTypeEnum osdbOutputType;
    public ExecBody withOsdbOutputType(ExecBodyOsdbOutputTypeEnum osdbOutputType) {
        this.osdbOutputType = osdbOutputType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osdb:response_format")
    public String osdbResponseFormat;
    public ExecBody withOsdbResponseFormat(String osdbResponseFormat) {
        this.osdbResponseFormat = osdbResponseFormat;
        return this;
    }
}