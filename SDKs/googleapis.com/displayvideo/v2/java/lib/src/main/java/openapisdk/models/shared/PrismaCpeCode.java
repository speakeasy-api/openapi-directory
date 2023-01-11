package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PrismaCpeCode
 * Google Payments Center supports searching and filtering on the component fields of this code.
**/
public class PrismaCpeCode {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prismaClientCode")
    public String prismaClientCode;
    public PrismaCpeCode withPrismaClientCode(String prismaClientCode) {
        this.prismaClientCode = prismaClientCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prismaEstimateCode")
    public String prismaEstimateCode;
    public PrismaCpeCode withPrismaEstimateCode(String prismaEstimateCode) {
        this.prismaEstimateCode = prismaEstimateCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prismaProductCode")
    public String prismaProductCode;
    public PrismaCpeCode withPrismaProductCode(String prismaProductCode) {
        this.prismaProductCode = prismaProductCode;
        return this;
    }
}