package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGrades {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gradeCode")
    public String gradeCode;
    public BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGrades withGradeCode(String gradeCode) {
        this.gradeCode = gradeCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gradeTitle")
    public String gradeTitle;
    public BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGrades withGradeTitle(String gradeTitle) {
        this.gradeTitle = gradeTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pricingMatrix")
    public BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrix[] pricingMatrix;
    public BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGrades withPricingMatrix(BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrix[] pricingMatrix) {
        this.pricingMatrix = pricingMatrix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortOrder")
    public Long sortOrder;
    public BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGrades withSortOrder(Long sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
}