import { SpeakeasyBase } from "../../../internal/utils";
/**
 * JSON template for resellernotify getwatchdetails response.
 */
export declare class ResellernotifyGetwatchdetailsResponse extends SpeakeasyBase {
    /**
     * List of registered service accounts.
     */
    serviceAccountEmailAddresses?: string[];
    /**
     * Topic name of the PubSub
     */
    topicName?: string;
}
