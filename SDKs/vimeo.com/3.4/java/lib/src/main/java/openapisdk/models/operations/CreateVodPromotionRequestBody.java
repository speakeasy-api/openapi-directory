package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateVodPromotionRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("access_type")
    public CreateVodPromotionRequestBodyAccessTypeEnum accessType;
    public CreateVodPromotionRequestBody withAccessType(CreateVodPromotionRequestBodyAccessTypeEnum accessType) {
        this.accessType = accessType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public CreateVodPromotionRequestBody withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discount_type")
    public CreateVodPromotionRequestBodyDiscountTypeEnum discountType;
    public CreateVodPromotionRequestBody withDiscountType(CreateVodPromotionRequestBodyDiscountTypeEnum discountType) {
        this.discountType = discountType;
        return this;
    }
    @JsonProperty("download")
    public Boolean download;
    public CreateVodPromotionRequestBody withDownload(Boolean download) {
        this.download = download;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_time")
    public String endTime;
    public CreateVodPromotionRequestBody withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public CreateVodPromotionRequestBody withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percent_off")
    public Double percentOff;
    public CreateVodPromotionRequestBody withPercentOff(Double percentOff) {
        this.percentOff = percentOff;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("product_type")
    public CreateVodPromotionRequestBodyProductTypeEnum productType;
    public CreateVodPromotionRequestBody withProductType(CreateVodPromotionRequestBodyProductTypeEnum productType) {
        this.productType = productType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_time")
    public String startTime;
    public CreateVodPromotionRequestBody withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonProperty("stream_period")
    public CreateVodPromotionRequestBodyStreamPeriodEnum streamPeriod;
    public CreateVodPromotionRequestBody withStreamPeriod(CreateVodPromotionRequestBodyStreamPeriodEnum streamPeriod) {
        this.streamPeriod = streamPeriod;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public CreateVodPromotionRequestBody withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("type")
    public CreateVodPromotionRequestBodyTypeEnum type;
    public CreateVodPromotionRequestBody withType(CreateVodPromotionRequestBodyTypeEnum type) {
        this.type = type;
        return this;
    }
}