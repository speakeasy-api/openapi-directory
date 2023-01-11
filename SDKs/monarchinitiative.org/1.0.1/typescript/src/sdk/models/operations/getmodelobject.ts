import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetModelObjectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetModelObjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetModelObjectPathParams;
}


export class GetModelObjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
