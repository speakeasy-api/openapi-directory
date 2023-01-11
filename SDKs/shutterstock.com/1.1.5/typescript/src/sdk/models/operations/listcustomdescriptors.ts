import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListCustomDescriptorsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=band_id" })
  bandId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=band_name" })
  bandName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=instrument_id" })
  instrumentId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=instrument_name" })
  instrumentName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=render_speed_over" })
  renderSpeedOver?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tempo" })
  tempo?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tempo_from" })
  tempoFrom?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tempo_to" })
  tempoTo?: number;
}


export class ListCustomDescriptorsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode?: shared.SchemeCustomerAccessCode;
}


export class ListCustomDescriptorsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListCustomDescriptorsQueryParams;

  @SpeakeasyMetadata()
  security: ListCustomDescriptorsSecurity;
}


export class ListCustomDescriptorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  descriptorsListResult?: shared.DescriptorsListResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
