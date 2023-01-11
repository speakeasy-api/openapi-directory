import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EchoQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;
}


export class EchoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EchoQueryParams;
}


export class EchoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  testEcho?: shared.TestEcho;
}
