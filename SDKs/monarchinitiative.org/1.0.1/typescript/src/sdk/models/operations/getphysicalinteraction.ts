import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPhysicalInteractionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contributor" })
  contributor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=title" })
  title?: string;
}


export class GetPhysicalInteractionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPhysicalInteractionQueryParams;
}


export class GetPhysicalInteractionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
