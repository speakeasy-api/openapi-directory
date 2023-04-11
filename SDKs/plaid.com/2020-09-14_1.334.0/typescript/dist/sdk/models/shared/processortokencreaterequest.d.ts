import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The processor you are integrating with.
 */
export declare enum ProcessorTokenCreateRequestProcessorEnum {
    Dwolla = "dwolla",
    Galileo = "galileo",
    ModernTreasury = "modern_treasury",
    Ocrolus = "ocrolus",
    PrimeTrust = "prime_trust",
    Vesta = "vesta",
    Drivewealth = "drivewealth",
    Vopay = "vopay",
    Achq = "achq",
    Check = "check",
    Checkbook = "checkbook",
    Circle = "circle",
    SilaMoney = "sila_money",
    Rize = "rize",
    SvbApi = "svb_api",
    Unit = "unit",
    Wyre = "wyre",
    Lithic = "lithic",
    Alpaca = "alpaca",
    Astra = "astra",
    Moov = "moov",
    TreasuryPrime = "treasury_prime",
    Marqeta = "marqeta",
    Checkout = "checkout",
    Solid = "solid",
    Highnote = "highnote",
    ApexClearing = "apex_clearing",
    Gusto = "gusto",
    Adyen = "adyen",
    Atomic = "atomic",
    I2c = "i2c",
    Wepay = "wepay",
    Riskified = "riskified"
}
/**
 * ProcessorTokenCreateRequest defines the request schema for `/processor/token/create`
 */
export declare class ProcessorTokenCreateRequest extends SpeakeasyBase {
    /**
     * The access token associated with the Item data is being requested for.
     */
    accessToken: string;
    /**
     * The `account_id` value obtained from the `onSuccess` callback in Link
     */
    accountId: string;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * The processor you are integrating with.
     */
    processor: ProcessorTokenCreateRequestProcessorEnum;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
