import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListBatchErrorsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=batch_id" })
  batchId: string;
}


export class ListBatchErrorsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;
}


export class ListBatchErrorsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListBatchErrorsPathParams;

  @SpeakeasyMetadata()
  queryParams: ListBatchErrorsQueryParams;
}


export class ListBatchErrorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;

  @SpeakeasyMetadata()
  listBatchErrorsResponseBody?: shared.ListBatchErrorsResponseBody;
}
