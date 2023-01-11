package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExchangeConfigEnabledExchange
 * An enabled exchange in the partner.
**/
public class ExchangeConfigEnabledExchange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exchange")
    public ExchangeConfigEnabledExchangeExchangeEnum exchange;
    public ExchangeConfigEnabledExchange withExchange(ExchangeConfigEnabledExchangeExchangeEnum exchange) {
        this.exchange = exchange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleAdManagerAgencyId")
    public String googleAdManagerAgencyId;
    public ExchangeConfigEnabledExchange withGoogleAdManagerAgencyId(String googleAdManagerAgencyId) {
        this.googleAdManagerAgencyId = googleAdManagerAgencyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleAdManagerBuyerNetworkId")
    public String googleAdManagerBuyerNetworkId;
    public ExchangeConfigEnabledExchange withGoogleAdManagerBuyerNetworkId(String googleAdManagerBuyerNetworkId) {
        this.googleAdManagerBuyerNetworkId = googleAdManagerBuyerNetworkId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seatId")
    public String seatId;
    public ExchangeConfigEnabledExchange withSeatId(String seatId) {
        this.seatId = seatId;
        return this;
    }
}