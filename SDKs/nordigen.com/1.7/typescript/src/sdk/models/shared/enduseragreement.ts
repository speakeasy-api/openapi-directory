import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EndUserAgreement
/** 
 * Represents an end-user agreement.
**/
export class EndUserAgreement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accepted" })
  accepted?: Date;

  @SpeakeasyMetadata({ data: "json, name=access_scope" })
  accessScope?: string[];

  @SpeakeasyMetadata({ data: "json, name=access_valid_for_days" })
  accessValidForDays?: number;

  @SpeakeasyMetadata({ data: "json, name=aspsp_id" })
  aspspId: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=enduser_id" })
  enduserId: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=max_historical_days" })
  maxHistoricalDays: number;
}


// EndUserAgreementInput
/** 
 * Represents an end-user agreement.
**/
export class EndUserAgreementInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_scope, form, name=access_scope;, multipart_form, name=access_scope;json=true" })
  accessScope?: string[];

  @SpeakeasyMetadata({ data: "json, name=aspsp_id, form, name=aspsp_id;, multipart_form, name=aspsp_id" })
  aspspId: string;

  @SpeakeasyMetadata({ data: "json, name=enduser_id, form, name=enduser_id;, multipart_form, name=enduser_id" })
  enduserId: string;

  @SpeakeasyMetadata({ data: "json, name=max_historical_days, form, name=max_historical_days;, multipart_form, name=max_historical_days" })
  maxHistoricalDays: number;
}
