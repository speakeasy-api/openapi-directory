import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BasicAuth } from "./basicauth";
import { ChangedBy } from "./changedby";
import { Cookies } from "./cookies";
import { FormLogin } from "./formlogin";
import { Headers } from "./headers";
import { VerificationMethodEnum } from "./verificationmethodenum";



// Site
/** 
 * Main resource associated with a target
**/
export class Site extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=basic_auth" })
  basicAuth?: BasicAuth;

  @SpeakeasyMetadata({ data: "json, name=changed" })
  changed?: Date;

  @SpeakeasyMetadata({ data: "json, name=changed_by" })
  changedBy?: ChangedBy;

  @SpeakeasyMetadata({ data: "json, name=cookies", elemType: Cookies })
  cookies?: Cookies[];

  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: string;

  @SpeakeasyMetadata({ data: "json, name=form_login", elemType: FormLogin })
  formLogin?: FormLogin[];

  @SpeakeasyMetadata({ data: "json, name=form_login_check_pattern" })
  formLoginCheckPattern?: string;

  @SpeakeasyMetadata({ data: "json, name=form_login_url" })
  formLoginUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=has_basic_auth" })
  hasBasicAuth?: boolean;

  @SpeakeasyMetadata({ data: "json, name=has_form_login" })
  hasFormLogin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=headers", elemType: Headers })
  headers?: Headers[];

  @SpeakeasyMetadata({ data: "json, name=host" })
  host?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=stack" })
  stack?: string[];

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=verification_date" })
  verificationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=verification_last_error" })
  verificationLastError?: string;

  @SpeakeasyMetadata({ data: "json, name=verification_method" })
  verificationMethod?: VerificationMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=verification_token" })
  verificationToken?: string;

  @SpeakeasyMetadata({ data: "json, name=verified" })
  verified?: boolean;

  @SpeakeasyMetadata({ data: "json, name=whitelist" })
  whitelist?: string[];
}


// SiteInput
/** 
 * Main resource associated with a target
**/
export class SiteInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=basic_auth" })
  basicAuth?: BasicAuth;

  @SpeakeasyMetadata({ data: "json, name=cookies", elemType: Cookies })
  cookies?: Cookies[];

  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: string;

  @SpeakeasyMetadata({ data: "json, name=form_login", elemType: FormLogin })
  formLogin?: FormLogin[];

  @SpeakeasyMetadata({ data: "json, name=form_login_check_pattern" })
  formLoginCheckPattern?: string;

  @SpeakeasyMetadata({ data: "json, name=form_login_url" })
  formLoginUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=has_basic_auth" })
  hasBasicAuth?: boolean;

  @SpeakeasyMetadata({ data: "json, name=has_form_login" })
  hasFormLogin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=headers", elemType: Headers })
  headers?: Headers[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=whitelist" })
  whitelist?: string[];
}
