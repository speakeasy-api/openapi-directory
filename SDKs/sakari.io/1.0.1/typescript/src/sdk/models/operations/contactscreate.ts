import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ContactsCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class ContactsCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mergeStrategy" })
  mergeStrategy?: shared.AccountIdEnum;
}


export class ContactsCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  contactRequest?: shared.ContactRequest;

  @SpeakeasyMetadata({ data: "request, media_type=text/csv" })
  string?: string;
}


export class ContactsCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  sakariAuth: shared.SchemeSakariAuth;
}


export class ContactsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ContactsCreatePathParams;

  @SpeakeasyMetadata()
  queryParams: ContactsCreateQueryParams;

  @SpeakeasyMetadata()
  request?: ContactsCreateRequests;

  @SpeakeasyMetadata()
  security: ContactsCreateSecurity;
}


export class ContactsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  contactsCreate201ApplicationJSONOneOf?: any;
}
