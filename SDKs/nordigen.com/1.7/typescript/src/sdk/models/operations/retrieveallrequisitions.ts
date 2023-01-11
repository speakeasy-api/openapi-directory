import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RetrieveAllRequisitionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class RetrieveAllRequisitionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RetrieveAllRequisitionsQueryParams;
}


export class RetrieveAllRequisitionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paginatedRequisitionList?: shared.PaginatedRequisitionList;

  @SpeakeasyMetadata()
  statusCode: number;
}
