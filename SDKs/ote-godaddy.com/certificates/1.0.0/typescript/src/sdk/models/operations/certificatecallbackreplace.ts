import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CertificateCallbackReplacePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=certificateId" })
  certificateId: string;
}


export class CertificateCallbackReplaceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callbackUrl" })
  callbackUrl: string;
}


export class CertificateCallbackReplaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CertificateCallbackReplacePathParams;

  @SpeakeasyMetadata()
  queryParams: CertificateCallbackReplaceQueryParams;
}


export class CertificateCallbackReplaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
