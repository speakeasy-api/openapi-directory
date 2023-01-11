import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDiscoveryV2ClassificationsIncludeLicensedContentEnum {
    Yes = "yes",
    No = " no"
}

export enum GetDiscoveryV2ClassificationsIncludeSpellcheckEnum {
    Yes = "yes",
    No = " no"
}

export enum GetDiscoveryV2ClassificationsIncludeTestEnum {
    Yes = "yes",
    No = " no",
    Only = " only"
}

export enum GetDiscoveryV2ClassificationsSourceEnum {
    Ticketmaster = "ticketmaster",
    Universe = " universe",
    Frontgate = " frontgate",
    Tmr = " tmr"
}


export class GetDiscoveryV2ClassificationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeLicensedContent" })
  includeLicensedContent?: GetDiscoveryV2ClassificationsIncludeLicensedContentEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeSpellcheck" })
  includeSpellcheck?: GetDiscoveryV2ClassificationsIncludeSpellcheckEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeTest" })
  includeTest?: GetDiscoveryV2ClassificationsIncludeTestEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=keyword" })
  keyword?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source" })
  source?: GetDiscoveryV2ClassificationsSourceEnum;
}


export class GetDiscoveryV2ClassificationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDiscoveryV2ClassificationsQueryParams;
}


export class GetDiscoveryV2ClassificationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
