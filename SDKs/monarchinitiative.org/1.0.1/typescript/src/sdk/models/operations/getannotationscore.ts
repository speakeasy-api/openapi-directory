import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAnnotationScoreQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=absent_id" })
  absentId?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string[];
}


export class GetAnnotationScoreRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAnnotationScoreQueryParams;
}


export class GetAnnotationScoreResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  sufficiencyOutput?: shared.SufficiencyOutput;
}
