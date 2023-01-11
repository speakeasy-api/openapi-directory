import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RetrieveAccountTransactionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class RetrieveAccountTransactionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RetrieveAccountTransactionsPathParams;
}


export class RetrieveAccountTransactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
