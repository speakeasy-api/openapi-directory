package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AvailableProducts200ApplicationJsonDataPasTourGradesAvailDates {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateList")
    public String dateList;
    public AvailableProducts200ApplicationJsonDataPasTourGradesAvailDates withDateList(String dateList) {
        this.dateList = dateList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceFrom")
    public String priceFrom;
    public AvailableProducts200ApplicationJsonDataPasTourGradesAvailDates withPriceFrom(String priceFrom) {
        this.priceFrom = priceFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceQuote")
    public AvailableProducts200ApplicationJsonDataPasTourGradesAvailDatesPriceQuote priceQuote;
    public AvailableProducts200ApplicationJsonDataPasTourGradesAvailDates withPriceQuote(AvailableProducts200ApplicationJsonDataPasTourGradesAvailDatesPriceQuote priceQuote) {
        this.priceQuote = priceQuote;
        return this;
    }
}