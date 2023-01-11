import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DownloadHtmlInvoicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DownloadHtmlInvoiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DownloadHtmlInvoicePathParams;
}


export class DownloadHtmlInvoiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  downloadHTMLInvoice200TextHTMLString?: string;
}
