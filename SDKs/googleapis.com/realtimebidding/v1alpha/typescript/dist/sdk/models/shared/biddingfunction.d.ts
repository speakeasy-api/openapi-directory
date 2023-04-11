import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. The state of the bidding function.
 */
export declare enum BiddingFunctionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Archived = "ARCHIVED"
}
/**
 * The type of the bidding function to be created.
 */
export declare enum BiddingFunctionTypeEnum {
    FunctionTypeUnspecified = "FUNCTION_TYPE_UNSPECIFIED",
    TurtledoveSimulationBiddingFunction = "TURTLEDOVE_SIMULATION_BIDDING_FUNCTION",
    FledgeBiddingFunction = "FLEDGE_BIDDING_FUNCTION"
}
/**
 * The bidding function to be executed as part of the TURTLEDOVE simulation experiment bidding flow.
 */
export declare class BiddingFunction extends SpeakeasyBase {
    /**
     * The raw Javascript source code of the bidding function.
     */
    biddingFunction?: string;
    /**
     * The name of the bidding function that must follow the pattern: `bidders/{bidder_account_id}/biddingFunctions/{bidding_function_name}`.
     */
    name?: string;
    /**
     * Output only. The state of the bidding function.
     */
    state?: BiddingFunctionStateEnum;
    /**
     * The type of the bidding function to be created.
     */
    type?: BiddingFunctionTypeEnum;
}
/**
 * The bidding function to be executed as part of the TURTLEDOVE simulation experiment bidding flow.
 */
export declare class BiddingFunctionInput extends SpeakeasyBase {
    /**
     * The raw Javascript source code of the bidding function.
     */
    biddingFunction?: string;
    /**
     * The name of the bidding function that must follow the pattern: `bidders/{bidder_account_id}/biddingFunctions/{bidding_function_name}`.
     */
    name?: string;
    /**
     * The type of the bidding function to be created.
     */
    type?: BiddingFunctionTypeEnum;
}
