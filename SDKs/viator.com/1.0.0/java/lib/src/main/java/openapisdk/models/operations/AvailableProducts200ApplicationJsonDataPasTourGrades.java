package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AvailableProducts200ApplicationJsonDataPasTourGrades {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availDates")
    public AvailableProducts200ApplicationJsonDataPasTourGradesAvailDates[] availDates;
    public AvailableProducts200ApplicationJsonDataPasTourGrades withAvailDates(AvailableProducts200ApplicationJsonDataPasTourGradesAvailDates[] availDates) {
        this.availDates = availDates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingEngine")
    public String bookingEngine;
    public AvailableProducts200ApplicationJsonDataPasTourGrades withBookingEngine(String bookingEngine) {
        this.bookingEngine = bookingEngine;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public AvailableProducts200ApplicationJsonDataPasTourGrades withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageServices")
    public java.util.Map<String, Object[]> languageServices;
    public AvailableProducts200ApplicationJsonDataPasTourGrades withLanguageServices(java.util.Map<String, Object[]> languageServices) {
        this.languageServices = languageServices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sapi")
    public Boolean sapi;
    public AvailableProducts200ApplicationJsonDataPasTourGrades withSapi(Boolean sapi) {
        this.sapi = sapi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public AvailableProducts200ApplicationJsonDataPasTourGrades withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tourGradeCode")
    public String tourGradeCode;
    public AvailableProducts200ApplicationJsonDataPasTourGrades withTourGradeCode(String tourGradeCode) {
        this.tourGradeCode = tourGradeCode;
        return this;
    }
}