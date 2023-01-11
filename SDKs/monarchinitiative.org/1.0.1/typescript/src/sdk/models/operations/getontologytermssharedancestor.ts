import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOntologyTermsSharedAncestorPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=object" })
  object: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subject" })
  subject: string;
}


export class GetOntologyTermsSharedAncestorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOntologyTermsSharedAncestorPathParams;
}


export class GetOntologyTermsSharedAncestorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
