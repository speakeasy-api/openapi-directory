package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Analytics200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date")
    public String date;
    public Analytics200ApplicationJson withDate(String date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("direct")
    public Long direct;
    public Analytics200ApplicationJson withDirect(Long direct) {
        this.direct = direct;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("economy")
    public Long economy;
    public Analytics200ApplicationJson withEconomy(Long economy) {
        this.economy = economy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hlr")
    public Long hlr;
    public Analytics200ApplicationJson withHlr(Long hlr) {
        this.hlr = hlr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inbound")
    public Long inbound;
    public Analytics200ApplicationJson withInbound(Long inbound) {
        this.inbound = inbound;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mnp")
    public Long mnp;
    public Analytics200ApplicationJson withMnp(Long mnp) {
        this.mnp = mnp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usage_eur")
    public Float usageEur;
    public Analytics200ApplicationJson withUsageEur(Float usageEur) {
        this.usageEur = usageEur;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice")
    public Long voice;
    public Analytics200ApplicationJson withVoice(Long voice) {
        this.voice = voice;
        return this;
    }
}