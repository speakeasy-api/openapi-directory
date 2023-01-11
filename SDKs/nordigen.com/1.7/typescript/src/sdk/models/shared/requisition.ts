import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Requisition
/** 
 * RequisitionSerializer.
**/
export class Requisition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accounts" })
  accounts?: string[];

  @SpeakeasyMetadata({ data: "json, name=agreements" })
  agreements?: string[];

  @SpeakeasyMetadata({ data: "json, name=enduser_id" })
  enduserId: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=redirect" })
  redirect: string;

  @SpeakeasyMetadata({ data: "json, name=reference" })
  reference: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=user_language" })
  userLanguage?: string;
}


// RequisitionInput
/** 
 * RequisitionSerializer.
**/
export class RequisitionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agreements, form, name=agreements;, multipart_form, name=agreements;json=true" })
  agreements?: string[];

  @SpeakeasyMetadata({ data: "json, name=enduser_id, form, name=enduser_id;, multipart_form, name=enduser_id" })
  enduserId: string;

  @SpeakeasyMetadata({ data: "json, name=redirect, form, name=redirect;, multipart_form, name=redirect" })
  redirect: string;

  @SpeakeasyMetadata({ data: "json, name=reference, form, name=reference;, multipart_form, name=reference" })
  reference: string;

  @SpeakeasyMetadata({ data: "json, name=user_language, form, name=user_language;, multipart_form, name=user_language" })
  userLanguage?: string;
}
