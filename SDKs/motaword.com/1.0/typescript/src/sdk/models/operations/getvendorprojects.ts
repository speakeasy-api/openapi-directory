import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVendorProjectsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=completed" })
  completed?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=joined" })
  joined?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetVendorProjectsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetVendorProjectsQueryParams;
}


export class GetVendorProjectsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  projectList?: shared.ProjectList;

  @SpeakeasyMetadata()
  statusCode: number;
}
