import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListShipmentRatesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shipment_id" })
  shipmentId: string;
}


export class ListShipmentRatesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created_at_start" })
  createdAtStart?: Date;
}


export class ListShipmentRatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListShipmentRatesPathParams;

  @SpeakeasyMetadata()
  queryParams: ListShipmentRatesQueryParams;
}


export class ListShipmentRatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;

  @SpeakeasyMetadata()
  listShipmentRatesResponseBody?: shared.ListShipmentRatesResponseBody;
}
