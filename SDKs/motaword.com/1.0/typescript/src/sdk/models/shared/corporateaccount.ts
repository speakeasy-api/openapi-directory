import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BillingAddress } from "./billingaddress";



export class CorporateAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billing" })
  billing?: BillingAddress;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=logo" })
  logo?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=web_site" })
  webSite?: string;
}
