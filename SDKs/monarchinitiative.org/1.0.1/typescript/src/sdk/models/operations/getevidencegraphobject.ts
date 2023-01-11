import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEvidenceGraphObjectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetEvidenceGraphObjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEvidenceGraphObjectPathParams;
}


export class GetEvidenceGraphObjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Graph })
  graphs?: shared.Graph[];

  @SpeakeasyMetadata()
  statusCode: number;
}
