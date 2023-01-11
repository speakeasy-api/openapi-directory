import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListChannelsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=aliases" })
  aliases?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=platformId" })
  platformId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=regionId" })
  regionId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scheduleEnd" })
  scheduleEnd?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scheduleStart" })
  scheduleStart?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scheduleUpdatedSince" })
  scheduleUpdatedSince?: string;
}


export class ListChannelsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class ListChannelsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListChannelsQueryParams;

  @SpeakeasyMetadata()
  security: ListChannelsSecurity;
}


export class ListChannelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listChannels200ApplicationJSONObject?: Record<string, any>;
}
