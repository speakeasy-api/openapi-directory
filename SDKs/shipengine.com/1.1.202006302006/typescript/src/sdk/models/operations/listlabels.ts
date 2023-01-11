import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListLabelsSortByEnum {
    ModifiedAt = "modified_at",
    CreatedAt = "created_at"
}


export class ListLabelsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=batch_id" })
  batchId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=carrier_id" })
  carrierId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created_at_end" })
  createdAtEnd?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created_at_start" })
  createdAtStart?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=label_status" })
  labelStatus?: shared.LabelStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rate_id" })
  rateId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=service_code" })
  serviceCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=shipment_id" })
  shipmentId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_by" })
  sortBy?: ListLabelsSortByEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_dir" })
  sortDir?: Record<string, any>;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tracking_number" })
  trackingNumber?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=warehouse_id" })
  warehouseId?: string;
}


export class ListLabelsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListLabelsQueryParams;
}


export class ListLabelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;

  @SpeakeasyMetadata()
  listLabelsResponseBody?: Record<string, any>;
}
