import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOntolLabelerResourceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string[];
}


export class GetOntolLabelerResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetOntolLabelerResourceQueryParams;
}


export class GetOntolLabelerResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
