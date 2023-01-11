import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TokenErrorAccountStatusEnum {
    Registered = "registered",
    EmailConfirmed = "email_confirmed",
    Deleted = "deleted",
    Suspended = "suspended",
    Rejected = "rejected",
    Approved = "approved",
    Resume = "resume",
    Webinar = "webinar",
    Course = "course"
}


export class TokenError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_status" })
  accountStatus?: TokenErrorAccountStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=help" })
  help?: string;

  @SpeakeasyMetadata({ data: "json, name=http_code" })
  httpCode?: number;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
