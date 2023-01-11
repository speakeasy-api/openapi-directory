import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListShipmentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=batch_id" })
  batchId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created_at_end" })
  createdAtEnd?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created_at_start" })
  createdAtStart?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modified_at_end" })
  modifiedAtEnd?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modified_at_start" })
  modifiedAtStart?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sales_order_id" })
  salesOrderId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=shipment_status" })
  shipmentStatus?: shared.ShipmentStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_by" })
  sortBy?: shared.ShipmentsSortByEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_dir" })
  sortDir?: Record<string, any>;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;
}


export class ListShipmentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListShipmentsQueryParams;
}


export class ListShipmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;

  @SpeakeasyMetadata()
  listShipmentsResponseBody?: shared.ListShipmentsResponseBody;
}
