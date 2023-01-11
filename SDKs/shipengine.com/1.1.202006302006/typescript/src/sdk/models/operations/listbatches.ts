import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListBatchesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_by" })
  sortBy?: shared.BatchesSortByEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_dir" })
  sortDir?: Record<string, any>;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: shared.BatchStatusEnum;
}


export class ListBatchesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListBatchesQueryParams;
}


export class ListBatchesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;

  @SpeakeasyMetadata()
  listBatchesResponseBody?: shared.ListBatchesResponseBody;
}
