import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPaymentsResellerSubscriptionV1Duration } from "./googlecloudpaymentsresellersubscriptionv1duration";
/**
 * Describes the details of an extension request.
 */
export declare class GoogleCloudPaymentsResellerSubscriptionV1Extension extends SpeakeasyBase {
    /**
     * Describes the length of a period of a time.
     */
    duration?: GoogleCloudPaymentsResellerSubscriptionV1Duration;
    /**
     * Required. Identifier of the end-user in partner’s system.
     */
    partnerUserToken?: string;
}
