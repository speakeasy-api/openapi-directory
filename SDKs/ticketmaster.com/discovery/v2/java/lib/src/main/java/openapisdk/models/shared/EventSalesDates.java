package openapisdk.models.shared;



/**
 * EventSalesDates
 * Event's Sales Dates
**/
public class EventSalesDates {
    public Presale[] presales;
    public EventSalesDates withPresales(Presale[] presales) {
        this.presales = presales;
        return this;
    }
    public PublicSaleDates public_;
    public EventSalesDates withPublic(PublicSaleDates public_) {
        this.public_ = public_;
        return this;
    }
}