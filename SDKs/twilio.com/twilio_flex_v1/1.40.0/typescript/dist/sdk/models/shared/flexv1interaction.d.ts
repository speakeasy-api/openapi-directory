import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class FlexV1Interaction extends SpeakeasyBase {
    /**
     * A JSON object that defines the Interaction’s communication channel and includes details about the channel. See the [Outbound SMS](https://www.twilio.com/docs/flex/developer/conversations/interactions-api/interactions#agent-initiated-outbound-interactions) and [inbound (API-initiated)](https://www.twilio.com/docs/flex/developer/conversations/interactions-api/interactions#api-initiated-contact) Channel object examples.
     */
    channel?: any;
    links?: Record<string, any>;
    /**
     * A JSON Object representing the routing rules for the Interaction Channel. See [Outbound SMS Example](https://www.twilio.com/docs/flex/developer/conversations/interactions-api/interactions#agent-initiated-outbound-interactions) for an example Routing object. The Interactions resource uses TaskRouter for all routing functionality.
     *
     * @remarks
     *  All attributes in the Routing object on your Interaction request body are added “as is” to the task. For a list of known attributes consumed by the Flex UI and/or Flex Insights, see [Known Task Attributes](https://www.twilio.com/docs/flex/developer/conversations/interactions-api#task-attributes).
     */
    routing?: any;
    /**
     * The unique string created by Twilio to identify an Interaction resource, prefixed with KD.
     */
    sid?: string;
    url?: string;
}
