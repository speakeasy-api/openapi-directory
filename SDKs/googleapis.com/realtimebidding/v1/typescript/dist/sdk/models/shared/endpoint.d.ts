import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The protocol that the bidder endpoint is using.
 */
export declare enum EndpointBidProtocolEnum {
    BidProtocolUnspecified = "BID_PROTOCOL_UNSPECIFIED",
    GoogleRtb = "GOOGLE_RTB",
    OpenrtbJson = "OPENRTB_JSON",
    OpenrtbProtobuf = "OPENRTB_PROTOBUF"
}
/**
 * The trading location that bid requests should be sent from. See https://developers.google.com/authorized-buyers/rtb/peer-guide#trading-locations for further information.
 */
export declare enum EndpointTradingLocationEnum {
    TradingLocationUnspecified = "TRADING_LOCATION_UNSPECIFIED",
    UsWest = "US_WEST",
    UsEast = "US_EAST",
    Europe = "EUROPE",
    Asia = "ASIA"
}
/**
 * Bidder endpoint that receives bid requests.
 */
export declare class Endpoint extends SpeakeasyBase {
    /**
     * The protocol that the bidder endpoint is using.
     */
    bidProtocol?: EndpointBidProtocolEnum;
    /**
     * The maximum number of queries per second allowed to be sent to this server.
     */
    maximumQps?: string;
    /**
     * Output only. Name of the endpoint resource that must follow the pattern `bidders/{bidderAccountId}/endpoints/{endpointId}`, where {bidderAccountId} is the account ID of the bidder who operates this endpoint, and {endpointId} is a unique ID assigned by the server.
     */
    name?: string;
    /**
     * The trading location that bid requests should be sent from. See https://developers.google.com/authorized-buyers/rtb/peer-guide#trading-locations for further information.
     */
    tradingLocation?: EndpointTradingLocationEnum;
    /**
     * Output only. The URL that bid requests should be sent to.
     */
    url?: string;
}
