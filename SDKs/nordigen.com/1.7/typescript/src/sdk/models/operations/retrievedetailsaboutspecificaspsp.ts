import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RetrieveDetailsAboutSpecificAspspPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class RetrieveDetailsAboutSpecificAspspRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RetrieveDetailsAboutSpecificAspspPathParams;
}


export class RetrieveDetailsAboutSpecificAspspResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  aspsp?: shared.Aspsp;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
