package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeliveryTime {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cutoffTime")
    public CutoffTime cutoffTime;
    public DeliveryTime withCutoffTime(CutoffTime cutoffTime) {
        this.cutoffTime = cutoffTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("handlingBusinessDayConfig")
    public BusinessDayConfig handlingBusinessDayConfig;
    public DeliveryTime withHandlingBusinessDayConfig(BusinessDayConfig handlingBusinessDayConfig) {
        this.handlingBusinessDayConfig = handlingBusinessDayConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("holidayCutoffs")
    public HolidayCutoff[] holidayCutoffs;
    public DeliveryTime withHolidayCutoffs(HolidayCutoff[] holidayCutoffs) {
        this.holidayCutoffs = holidayCutoffs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxHandlingTimeInDays")
    public Long maxHandlingTimeInDays;
    public DeliveryTime withMaxHandlingTimeInDays(Long maxHandlingTimeInDays) {
        this.maxHandlingTimeInDays = maxHandlingTimeInDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxTransitTimeInDays")
    public Long maxTransitTimeInDays;
    public DeliveryTime withMaxTransitTimeInDays(Long maxTransitTimeInDays) {
        this.maxTransitTimeInDays = maxTransitTimeInDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minHandlingTimeInDays")
    public Long minHandlingTimeInDays;
    public DeliveryTime withMinHandlingTimeInDays(Long minHandlingTimeInDays) {
        this.minHandlingTimeInDays = minHandlingTimeInDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minTransitTimeInDays")
    public Long minTransitTimeInDays;
    public DeliveryTime withMinTransitTimeInDays(Long minTransitTimeInDays) {
        this.minTransitTimeInDays = minTransitTimeInDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transitBusinessDayConfig")
    public BusinessDayConfig transitBusinessDayConfig;
    public DeliveryTime withTransitBusinessDayConfig(BusinessDayConfig transitBusinessDayConfig) {
        this.transitBusinessDayConfig = transitBusinessDayConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transitTimeTable")
    public TransitTable transitTimeTable;
    public DeliveryTime withTransitTimeTable(TransitTable transitTimeTable) {
        this.transitTimeTable = transitTimeTable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warehouseBasedDeliveryTimes")
    public WarehouseBasedDeliveryTime[] warehouseBasedDeliveryTimes;
    public DeliveryTime withWarehouseBasedDeliveryTimes(WarehouseBasedDeliveryTime[] warehouseBasedDeliveryTimes) {
        this.warehouseBasedDeliveryTimes = warehouseBasedDeliveryTimes;
        return this;
    }
}