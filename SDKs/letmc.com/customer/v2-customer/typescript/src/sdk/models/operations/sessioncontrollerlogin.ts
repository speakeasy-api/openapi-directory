import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SessionControllerLoginPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shortName" })
  shortName: string;
}


export class SessionControllerLoginQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=username" })
  username: string;
}


export class SessionControllerLoginRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SessionControllerLoginPathParams;

  @SpeakeasyMetadata()
  queryParams: SessionControllerLoginQueryParams;
}


export class SessionControllerLoginResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sessionControllerLogin200ApplicationJSONString?: string;

  @SpeakeasyMetadata()
  sessionControllerLogin200ApplicationXMLString?: string;

  @SpeakeasyMetadata()
  sessionControllerLogin200TextJSONString?: string;

  @SpeakeasyMetadata()
  sessionControllerLogin200TextXMLString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
