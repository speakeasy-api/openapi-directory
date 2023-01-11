import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListShipmentErrorsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shipment_id" })
  shipmentId: string;
}


export class ListShipmentErrorsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;
}


export class ListShipmentErrorsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListShipmentErrorsPathParams;

  @SpeakeasyMetadata()
  queryParams: ListShipmentErrorsQueryParams;
}


export class ListShipmentErrorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;

  @SpeakeasyMetadata()
  listShipmentErrorsResponseBody?: shared.ListShipmentErrorsResponseBody;
}
