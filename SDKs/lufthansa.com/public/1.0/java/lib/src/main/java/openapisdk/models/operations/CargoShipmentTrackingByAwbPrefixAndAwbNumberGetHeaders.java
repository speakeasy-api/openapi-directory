package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CargoShipmentTrackingByAwbPrefixAndAwbNumberGetHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept")
    public String accept;
    public CargoShipmentTrackingByAwbPrefixAndAwbNumberGetHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
}