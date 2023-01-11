import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVendorProjectsByUserIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: number;
}


export class GetVendorProjectsByUserIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=completed" })
  completed?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=joined" })
  joined?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetVendorProjectsByUserIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVendorProjectsByUserIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetVendorProjectsByUserIdQueryParams;
}


export class GetVendorProjectsByUserIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  projectList?: shared.ProjectList;

  @SpeakeasyMetadata()
  statusCode: number;
}
