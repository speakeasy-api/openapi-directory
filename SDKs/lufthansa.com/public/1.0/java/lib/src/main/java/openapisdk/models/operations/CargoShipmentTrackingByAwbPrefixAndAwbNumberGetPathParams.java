package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CargoShipmentTrackingByAwbPrefixAndAwbNumberGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=aWBNumber")
    public String aWBNumber;
    public CargoShipmentTrackingByAwbPrefixAndAwbNumberGetPathParams withAWbNumber(String aWBNumber) {
        this.aWBNumber = aWBNumber;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=aWBPrefix")
    public String aWBPrefix;
    public CargoShipmentTrackingByAwbPrefixAndAwbNumberGetPathParams withAWbPrefix(String aWBPrefix) {
        this.aWBPrefix = aWBPrefix;
        return this;
    }
}