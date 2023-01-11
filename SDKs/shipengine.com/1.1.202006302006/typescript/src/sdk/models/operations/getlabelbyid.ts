import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLabelByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=label_id" })
  labelId: string;
}


export class GetLabelByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=label_download_type" })
  labelDownloadType?: shared.LabelDownloadTypeEnum;
}


export class GetLabelByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLabelByIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetLabelByIdQueryParams;
}


export class GetLabelByIdResponseOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;

  @SpeakeasyMetadata()
  getLabelByIdResponseBody?: shared.GetLabelByIdResponseBodyOutput;
}
