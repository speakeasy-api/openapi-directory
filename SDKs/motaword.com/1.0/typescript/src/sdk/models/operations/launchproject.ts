import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LaunchProjectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum LaunchProjectRequestBodyPaymentMethodEnum {
    Corporate = "corporate",
    Client = "client",
    App = "app",
    Credit = "credit",
    CorporateCard = "corporate_card"
}


export class LaunchProjectRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=bin" })
  bin?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=budget_code" })
  budgetCode?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=card_id" })
  cardId?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=payment_code" })
  paymentCode?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=payment_method" })
  paymentMethod?: LaunchProjectRequestBodyPaymentMethodEnum;

  @SpeakeasyMetadata({ data: "multipart_form, name=stripe_token" })
  stripeToken?: string;
}


export class LaunchProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LaunchProjectPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: LaunchProjectRequestBody;
}


export class LaunchProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  projectLaunchResponse?: shared.ProjectLaunchResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
