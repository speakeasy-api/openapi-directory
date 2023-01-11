import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetManifestByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=manifest_id" })
  manifestId: string;
}


export class GetManifestByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetManifestByIdPathParams;
}


export class GetManifestByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;

  @SpeakeasyMetadata()
  getManifestByIdResponseBody?: shared.GetManifestByIdResponseBody;
}
