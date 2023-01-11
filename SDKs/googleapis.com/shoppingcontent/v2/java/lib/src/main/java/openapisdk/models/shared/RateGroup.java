package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RateGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicableShippingLabels")
    public String[] applicableShippingLabels;
    public RateGroup withApplicableShippingLabels(String[] applicableShippingLabels) {
        this.applicableShippingLabels = applicableShippingLabels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrierRates")
    public CarrierRate[] carrierRates;
    public RateGroup withCarrierRates(CarrierRate[] carrierRates) {
        this.carrierRates = carrierRates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mainTable")
    public Table mainTable;
    public RateGroup withMainTable(Table mainTable) {
        this.mainTable = mainTable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public RateGroup withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("singleValue")
    public Value singleValue;
    public RateGroup withSingleValue(Value singleValue) {
        this.singleValue = singleValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subtables")
    public Table[] subtables;
    public RateGroup withSubtables(Table[] subtables) {
        this.subtables = subtables;
        return this;
    }
}