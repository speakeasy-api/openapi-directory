import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOntologyTermPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetOntologyTermRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOntologyTermPathParams;
}


export class GetOntologyTermResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
