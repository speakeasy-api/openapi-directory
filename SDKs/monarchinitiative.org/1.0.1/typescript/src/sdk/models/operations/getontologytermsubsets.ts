import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOntologyTermSubsetsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetOntologyTermSubsetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOntologyTermSubsetsPathParams;
}


export class GetOntologyTermSubsetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
