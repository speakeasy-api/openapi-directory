import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RetrieveAccountBalancesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class RetrieveAccountBalancesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RetrieveAccountBalancesPathParams;
}


export class RetrieveAccountBalancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
