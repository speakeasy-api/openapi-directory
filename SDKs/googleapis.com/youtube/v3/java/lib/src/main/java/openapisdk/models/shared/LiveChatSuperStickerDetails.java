package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LiveChatSuperStickerDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountDisplayString")
    public String amountDisplayString;
    public LiveChatSuperStickerDetails withAmountDisplayString(String amountDisplayString) {
        this.amountDisplayString = amountDisplayString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountMicros")
    public String amountMicros;
    public LiveChatSuperStickerDetails withAmountMicros(String amountMicros) {
        this.amountMicros = amountMicros;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public LiveChatSuperStickerDetails withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("superStickerMetadata")
    public SuperStickerMetadata superStickerMetadata;
    public LiveChatSuperStickerDetails withSuperStickerMetadata(SuperStickerMetadata superStickerMetadata) {
        this.superStickerMetadata = superStickerMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tier")
    public Long tier;
    public LiveChatSuperStickerDetails withTier(Long tier) {
        this.tier = tier;
        return this;
    }
}