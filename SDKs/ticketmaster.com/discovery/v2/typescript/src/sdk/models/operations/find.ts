import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FindIncludeLicensedContentEnum {
    Yes = "yes",
    No = " no"
}

export enum FindIncludeSpellcheckEnum {
    Yes = "yes",
    No = " no"
}

export enum FindIncludeTestEnum {
    Yes = "yes",
    No = " no",
    Only = " only"
}

export enum FindSourceEnum {
    Ticketmaster = "ticketmaster",
    Universe = " universe",
    Frontgate = " frontgate",
    Tmr = " tmr"
}


export class FindQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=classificationId" })
  classificationId?: any[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=classificationName" })
  classificationName?: any[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeLicensedContent" })
  includeLicensedContent?: FindIncludeLicensedContentEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeSpellcheck" })
  includeSpellcheck?: FindIncludeSpellcheckEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeTest" })
  includeTest?: FindIncludeTestEnum;

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
  source?: FindSourceEnum;
}


export class FindRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: FindQueryParams;
}


export class FindResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
