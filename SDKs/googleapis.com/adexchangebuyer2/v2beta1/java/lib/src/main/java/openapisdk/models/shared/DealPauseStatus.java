package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DealPauseStatus
 * Tracks which parties (if any) have paused a deal. The deal is considered paused if either hasBuyerPaused or hasSellPaused is true.
**/
public class DealPauseStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buyerPauseReason")
    public String buyerPauseReason;
    public DealPauseStatus withBuyerPauseReason(String buyerPauseReason) {
        this.buyerPauseReason = buyerPauseReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstPausedBy")
    public DealPauseStatusFirstPausedByEnum firstPausedBy;
    public DealPauseStatus withFirstPausedBy(DealPauseStatusFirstPausedByEnum firstPausedBy) {
        this.firstPausedBy = firstPausedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasBuyerPaused")
    public Boolean hasBuyerPaused;
    public DealPauseStatus withHasBuyerPaused(Boolean hasBuyerPaused) {
        this.hasBuyerPaused = hasBuyerPaused;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasSellerPaused")
    public Boolean hasSellerPaused;
    public DealPauseStatus withHasSellerPaused(Boolean hasSellerPaused) {
        this.hasSellerPaused = hasSellerPaused;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sellerPauseReason")
    public String sellerPauseReason;
    public DealPauseStatus withSellerPauseReason(String sellerPauseReason) {
        this.sellerPauseReason = sellerPauseReason;
        return this;
    }
}