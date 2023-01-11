import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TextToImageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=animation" })
  animation: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=author" })
  author: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authorFont" })
  authorFont: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authorFontColor" })
  authorFontColor: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=backgroundColor" })
  backgroundColor: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bgType" })
  bgType: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=brandLogo" })
  brandLogo: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableHighlight" })
  enableHighlight: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fontSize" })
  fontSize: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=gradientColor1" })
  gradientColor1: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=gradientColor2" })
  gradientColor2: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=gradientType" })
  gradientType: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=highlightColor" })
  highlightColor: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quote" })
  quote: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quoteFont" })
  quoteFont: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quoteFontColor" })
  quoteFontColor: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=showQuoteMark" })
  showQuoteMark?: number;
}


export class TextToImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: TextToImageQueryParams;
}


export class TextToImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
