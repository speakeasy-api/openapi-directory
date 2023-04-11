import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseFcmDataV1beta1Data } from "./googlefirebasefcmdatav1beta1data";
import { GoogleTypeDate } from "./googletypedate";
/**
 * Message delivery data for a given date, app, and analytics label combination.
 */
export declare class GoogleFirebaseFcmDataV1beta1AndroidDeliveryData extends SpeakeasyBase {
    /**
     * The analytics label associated with the messages sent. All messages sent without an analytics label will be grouped together in a single entry.
     */
    analyticsLabel?: string;
    /**
     * The app ID to which the messages were sent.
     */
    appId?: string;
    /**
     * Data detailing messaging delivery
     */
    data?: GoogleFirebaseFcmDataV1beta1Data;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    date?: GoogleTypeDate;
}
