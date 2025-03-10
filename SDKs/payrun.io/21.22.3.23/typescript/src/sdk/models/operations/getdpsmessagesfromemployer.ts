import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDpsMessagesFromEmployerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;
}


export class GetDpsMessagesFromEmployerHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetDpsMessagesFromEmployerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDpsMessagesFromEmployerPathParams;

  @SpeakeasyMetadata()
  headers: GetDpsMessagesFromEmployerHeaders;
}


export class GetDpsMessagesFromEmployerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  linkCollection?: shared.LinkCollection;

  @SpeakeasyMetadata()
  statusCode: number;
}
