import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RenameTagPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=new_tag_name" })
  newTagName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tag_name" })
  tagName: string;
}


export class RenameTagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RenameTagPathParams;
}


export class RenameTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  emptyResponseBody?: string;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;
}
