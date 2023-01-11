import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CompanyLogoQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain" })
  domain: string;
}


export class CompanyLogoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CompanyLogoQueryParams;
}


export class CompanyLogoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
