import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteTagPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tag_name" })
  tagName: string;
}


export class DeleteTagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteTagPathParams;
}


export class DeleteTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  emptyResponseBody?: string;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;
}
