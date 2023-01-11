import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CertificateValidateHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Market-Id" })
  xMarketId?: string;
}


export class CertificateValidateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CertificateValidateHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class CertificateValidateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
