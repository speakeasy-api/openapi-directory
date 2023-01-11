import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RetrieveEuaTextPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class RetrieveEuaTextRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RetrieveEuaTextPathParams;
}


export class RetrieveEuaTextResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
