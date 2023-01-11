package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EventSalesDates
 * Event's Sales Dates
**/
public class EventSalesDates {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("presales")
    public Presale[] presales;
    public EventSalesDates withPresales(Presale[] presales) {
        this.presales = presales;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("public")
    public PublicSaleDates public_;
    public EventSalesDates withPublic(PublicSaleDates public_) {
        this.public_ = public_;
        return this;
    }
}