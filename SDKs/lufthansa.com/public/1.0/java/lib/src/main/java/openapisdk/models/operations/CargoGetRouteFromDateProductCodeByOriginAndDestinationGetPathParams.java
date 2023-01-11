package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CargoGetRouteFromDateProductCodeByOriginAndDestinationGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=destination")
    public String destination;
    public CargoGetRouteFromDateProductCodeByOriginAndDestinationGetPathParams withDestination(String destination) {
        this.destination = destination;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fromDate")
    public String fromDate;
    public CargoGetRouteFromDateProductCodeByOriginAndDestinationGetPathParams withFromDate(String fromDate) {
        this.fromDate = fromDate;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=origin")
    public String origin;
    public CargoGetRouteFromDateProductCodeByOriginAndDestinationGetPathParams withOrigin(String origin) {
        this.origin = origin;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=productCode")
    public CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum productCode;
    public CargoGetRouteFromDateProductCodeByOriginAndDestinationGetPathParams withProductCode(CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum productCode) {
        this.productCode = productCode;
        return this;
    }
}