import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListAvailablePhoneNumberVoipServerList = [
	"https://api.twilio.com",
] as const;


export class ListAvailablePhoneNumberVoipPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CountryCode" })
  countryCode: string;
}


export class ListAvailablePhoneNumberVoipQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AreaCode" })
  areaCode?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Beta" })
  beta?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Contains" })
  contains?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Distance" })
  distance?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ExcludeAllAddressRequired" })
  excludeAllAddressRequired?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ExcludeForeignAddressRequired" })
  excludeForeignAddressRequired?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ExcludeLocalAddressRequired" })
  excludeLocalAddressRequired?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FaxEnabled" })
  faxEnabled?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InLata" })
  inLata?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InLocality" })
  inLocality?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InPostalCode" })
  inPostalCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InRateCenter" })
  inRateCenter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InRegion" })
  inRegion?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MmsEnabled" })
  mmsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NearLatLong" })
  nearLatLong?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NearNumber" })
  nearNumber?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SmsEnabled" })
  smsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VoiceEnabled" })
  voiceEnabled?: boolean;
}


export class ListAvailablePhoneNumberVoipSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListAvailablePhoneNumberVoipListAvailablePhoneNumberVoipResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=available_phone_numbers", elemType: shared.ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberVoip })
  availablePhoneNumbers?: shared.ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberVoip[];

  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: number;

  @SpeakeasyMetadata({ data: "json, name=first_page_uri" })
  firstPageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=next_page_uri" })
  nextPageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=previous_page_uri" })
  previousPageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}


export class ListAvailablePhoneNumberVoipRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverURL?: string;

  @SpeakeasyMetadata()
  pathParams: ListAvailablePhoneNumberVoipPathParams;

  @SpeakeasyMetadata()
  queryParams: ListAvailablePhoneNumberVoipQueryParams;

  @SpeakeasyMetadata()
  security: ListAvailablePhoneNumberVoipSecurity;
}


export class ListAvailablePhoneNumberVoipResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listAvailablePhoneNumberVoipResponse?: ListAvailablePhoneNumberVoipListAvailablePhoneNumberVoipResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
