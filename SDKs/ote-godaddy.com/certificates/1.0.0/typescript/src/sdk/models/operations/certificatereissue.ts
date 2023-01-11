import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CertificateReissuePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=certificateId" })
  certificateId: string;
}


export class CertificateReissueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CertificateReissuePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class CertificateReissueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
