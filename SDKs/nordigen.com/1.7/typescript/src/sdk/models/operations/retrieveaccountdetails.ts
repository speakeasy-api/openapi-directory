import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RetrieveAccountDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class RetrieveAccountDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RetrieveAccountDetailsPathParams;
}


export class RetrieveAccountDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
