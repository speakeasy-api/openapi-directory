import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOntologySubsetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetOntologySubsetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOntologySubsetPathParams;
}


export class GetOntologySubsetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
