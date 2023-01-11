import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DownloadPdfInvoicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DownloadPdfInvoiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DownloadPdfInvoicePathParams;
}


export class DownloadPdfInvoiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  downloadPdfInvoice200ApplicationPdfBinaryString?: Uint8Array;
}
