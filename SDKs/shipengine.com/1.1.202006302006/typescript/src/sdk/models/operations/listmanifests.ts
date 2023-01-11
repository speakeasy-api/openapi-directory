import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListManifestsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=carrier_id" })
  carrierId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created_at_end" })
  createdAtEnd?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created_at_start" })
  createdAtStart?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=label_ids" })
  labelIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ship_date_end" })
  shipDateEnd?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ship_date_start" })
  shipDateStart?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=warehouse_id" })
  warehouseId?: string;
}


export class ListManifestsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListManifestsQueryParams;
}


export class ListManifestsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;

  @SpeakeasyMetadata()
  listManifestsResponseBody?: shared.ListManifestsResponseBody;
}
