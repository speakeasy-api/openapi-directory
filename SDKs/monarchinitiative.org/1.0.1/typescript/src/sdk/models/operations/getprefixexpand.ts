import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPrefixExpandPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetPrefixExpandRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPrefixExpandPathParams;
}


export class GetPrefixExpandResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
