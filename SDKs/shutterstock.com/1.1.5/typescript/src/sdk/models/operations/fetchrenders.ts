import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FetchRendersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: string[];
}


export class FetchRendersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode?: shared.SchemeCustomerAccessCode;
}


export class FetchRendersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: FetchRendersQueryParams;

  @SpeakeasyMetadata()
  security: FetchRendersSecurity;
}


export class FetchRendersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  audioRendersListResults?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
