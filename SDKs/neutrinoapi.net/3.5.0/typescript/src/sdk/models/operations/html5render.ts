import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class Html5RenderRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=content;" })
  content: string;

  @SpeakeasyMetadata({ data: "form, name=css;" })
  css?: string;

  @SpeakeasyMetadata({ data: "form, name=footer-font;" })
  footerFont?: string;

  @SpeakeasyMetadata({ data: "form, name=footer-font-size;" })
  footerFontSize?: number;

  @SpeakeasyMetadata({ data: "form, name=footer-line;" })
  footerLine?: boolean;

  @SpeakeasyMetadata({ data: "form, name=footer-size;" })
  footerSize?: number;

  @SpeakeasyMetadata({ data: "form, name=footer-text-center;" })
  footerTextCenter?: string;

  @SpeakeasyMetadata({ data: "form, name=footer-text-left;" })
  footerTextLeft?: string;

  @SpeakeasyMetadata({ data: "form, name=footer-text-right;" })
  footerTextRight?: string;

  @SpeakeasyMetadata({ data: "form, name=format;" })
  format?: string;

  @SpeakeasyMetadata({ data: "form, name=forms;" })
  forms?: boolean;

  @SpeakeasyMetadata({ data: "form, name=grayscale;" })
  grayscale?: boolean;

  @SpeakeasyMetadata({ data: "form, name=header-font;" })
  headerFont?: string;

  @SpeakeasyMetadata({ data: "form, name=header-font-size;" })
  headerFontSize?: number;

  @SpeakeasyMetadata({ data: "form, name=header-line;" })
  headerLine?: boolean;

  @SpeakeasyMetadata({ data: "form, name=header-size;" })
  headerSize?: number;

  @SpeakeasyMetadata({ data: "form, name=header-text-center;" })
  headerTextCenter?: string;

  @SpeakeasyMetadata({ data: "form, name=header-text-left;" })
  headerTextLeft?: string;

  @SpeakeasyMetadata({ data: "form, name=header-text-right;" })
  headerTextRight?: string;

  @SpeakeasyMetadata({ data: "form, name=image-height;" })
  imageHeight?: number;

  @SpeakeasyMetadata({ data: "form, name=image-width;" })
  imageWidth?: number;

  @SpeakeasyMetadata({ data: "form, name=landscape;" })
  landscape?: boolean;

  @SpeakeasyMetadata({ data: "form, name=margin;" })
  margin?: number;

  @SpeakeasyMetadata({ data: "form, name=margin-bottom;" })
  marginBottom?: number;

  @SpeakeasyMetadata({ data: "form, name=margin-left;" })
  marginLeft?: number;

  @SpeakeasyMetadata({ data: "form, name=margin-right;" })
  marginRight?: number;

  @SpeakeasyMetadata({ data: "form, name=margin-top;" })
  marginTop?: number;

  @SpeakeasyMetadata({ data: "form, name=media-print;" })
  mediaPrint?: boolean;

  @SpeakeasyMetadata({ data: "form, name=media-queries;" })
  mediaQueries?: boolean;

  @SpeakeasyMetadata({ data: "form, name=page-height;" })
  pageHeight?: number;

  @SpeakeasyMetadata({ data: "form, name=page-size;" })
  pageSize?: string;

  @SpeakeasyMetadata({ data: "form, name=page-width;" })
  pageWidth?: number;

  @SpeakeasyMetadata({ data: "form, name=render-delay;" })
  renderDelay?: number;

  @SpeakeasyMetadata({ data: "form, name=title;" })
  title?: string;

  @SpeakeasyMetadata({ data: "form, name=zoom;" })
  zoom?: number;
}


export class Html5RenderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: Html5RenderRequestBody;
}


export class Html5RenderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  html5Render200ApplicationJSONBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
