import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteEuaByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteEuaByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteEuaByIdPathParams;
}


export class DeleteEuaByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
