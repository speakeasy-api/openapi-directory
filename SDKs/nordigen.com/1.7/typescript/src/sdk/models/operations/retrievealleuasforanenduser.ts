import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RetrieveAllEuAsForAnEndUserQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enduser_id" })
  enduserId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class RetrieveAllEuAsForAnEndUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RetrieveAllEuAsForAnEndUserQueryParams;
}


export class RetrieveAllEuAsForAnEndUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paginatedEndUserAgreementList?: shared.PaginatedEndUserAgreementList;

  @SpeakeasyMetadata()
  statusCode: number;
}
