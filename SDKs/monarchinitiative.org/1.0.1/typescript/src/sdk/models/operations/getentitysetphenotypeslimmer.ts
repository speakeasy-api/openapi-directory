import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetEntitySetPhenotypeSlimmerQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exclude_automatic_assertions" })
  excludeAutomaticAssertions?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rows" })
  rows?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slim" })
  slim: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subject" })
  subject: string[];
}


export class GetEntitySetPhenotypeSlimmerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetEntitySetPhenotypeSlimmerQueryParams;
}


export class GetEntitySetPhenotypeSlimmerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
