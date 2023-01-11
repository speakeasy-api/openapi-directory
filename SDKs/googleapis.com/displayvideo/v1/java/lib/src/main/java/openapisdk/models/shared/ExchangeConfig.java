package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExchangeConfig
 * Settings that control which exchanges are enabled for a partner.
**/
public class ExchangeConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabledExchanges")
    public ExchangeConfigEnabledExchange[] enabledExchanges;
    public ExchangeConfig withEnabledExchanges(ExchangeConfigEnabledExchange[] enabledExchanges) {
        this.enabledExchanges = enabledExchanges;
        return this;
    }
}