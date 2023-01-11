import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CertificateCreateHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Market-Id" })
  xMarketId?: string;
}


export class CertificateCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CertificateCreateHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class CertificateCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  certificateIdentifier?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
