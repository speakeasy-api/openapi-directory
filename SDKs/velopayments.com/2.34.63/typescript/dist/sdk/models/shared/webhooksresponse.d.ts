import { SpeakeasyBase } from "../../../internal/utils";
import { PagedPayeeInvitationStatusResponseV3Page } from "./pagedpayeeinvitationstatusresponsev3page";
import { PagedPayeeResponseV3Links } from "./pagedpayeeresponsev3links";
import { WebhookResponse } from "./webhookresponse";
/**
 * List Webhooks Object
 */
export declare class WebhooksResponse extends SpeakeasyBase {
    content?: WebhookResponse[];
    links?: PagedPayeeResponseV3Links[];
    page?: PagedPayeeInvitationStatusResponseV3Page;
}
