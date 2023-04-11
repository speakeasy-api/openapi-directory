import { SpeakeasyBase } from "../../../internal/utils";
export declare class AccountBidderLocation extends SpeakeasyBase {
    /**
     * The protocol that the bidder endpoint is using. OpenRTB protocols with prefix PROTOCOL_OPENRTB_PROTOBUF use proto buffer, otherwise use JSON.  Allowed values:
     *
     * @remarks
     * - PROTOCOL_ADX
     * - PROTOCOL_OPENRTB_2_2
     * - PROTOCOL_OPENRTB_2_3
     * - PROTOCOL_OPENRTB_2_4
     * - PROTOCOL_OPENRTB_2_5
     * - PROTOCOL_OPENRTB_PROTOBUF_2_3
     * - PROTOCOL_OPENRTB_PROTOBUF_2_4
     * - PROTOCOL_OPENRTB_PROTOBUF_2_5
     */
    bidProtocol?: string;
    /**
     * The maximum queries per second the Ad Exchange will send.
     */
    maximumQps?: number;
    /**
     * The geographical region the Ad Exchange should send requests from. Only used by some quota systems, but always setting the value is recommended. Allowed values:
     *
     * @remarks
     * - ASIA
     * - EUROPE
     * - US_EAST
     * - US_WEST
     */
    region?: string;
    /**
     * The URL to which the Ad Exchange will send bid requests.
     */
    url?: string;
}
/**
 * Configuration data for an Ad Exchange buyer account.
 */
export declare class Account extends SpeakeasyBase {
    /**
     * When this is false, bid requests that include a deal ID for a private auction or preferred deal are always sent to your bidder. When true, all active pretargeting configs will be applied to private auctions and preferred deals. Programmatic Guaranteed deals (when enabled) are always sent to your bidder.
     */
    applyPretargetingToNonGuaranteedDeals?: boolean;
    /**
     * Your bidder locations that have distinct URLs.
     */
    bidderLocation?: AccountBidderLocation[];
    /**
     * The nid parameter value used in cookie match requests. Please contact your technical account manager if you need to change this.
     */
    cookieMatchingNid?: string;
    /**
     * The base URL used in cookie match requests.
     */
    cookieMatchingUrl?: string;
    /**
     * Account id.
     */
    id?: number;
    /**
     * Resource type.
     */
    kind?: string;
    /**
     * The maximum number of active creatives that an account can have, where a creative is active if it was inserted or bid with in the last 30 days. Please contact your technical account manager if you need to change this.
     */
    maximumActiveCreatives?: number;
    /**
     * The sum of all bidderLocation.maximumQps values cannot exceed this. Please contact your technical account manager if you need to change this.
     */
    maximumTotalQps?: number;
    /**
     * The number of creatives that this account inserted or bid with in the last 30 days.
     */
    numberActiveCreatives?: number;
}
